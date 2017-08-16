import React from 'react';
import { Components, Location } from 'expo';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  MapView,
  AsyncStorage
} from 'react-native';

import { connect } from 'react-redux';
import { getAllBarbers, setCurrentBarber} from '../actions/barberActions';

class MapScreen extends React.Component {
  static route = {
    navigationBar: {
      backgroundColor: '#000',
      tintColor: '#fff',
      borderBottomColor: '#C79C6B',
      title: 'MAP'
    },
  }
  constructor(props) {
    super(props);

    this.state = {
      latitude: 0,
      longitude: 0,
      error: 0,
    };

  }
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  componentDidMount() {
    this.props.fetchBarbers();
    //geolocation
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {

    let text = 'Trim Services';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }

    return (
      <View style={{backgroundColor: '#000', flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.paragraph}></Text>
        </View>
        <View style={styles.mapView}>

          <Components.MapView
            style={{ alignSelf: 'stretch', height: 850 }}
            region={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.005334,
              longitudeDelta: 0.011834
            }}
            provider={Components.MapView.PROVIDER_GOOGLE}
            onRegionChange={this._handleMapRegionChange}
          >
            {
              this.props.barbers.map((b, index) => {
                return <Components.MapView.Marker
                  key={b._id}
                  coordinate={{
                    latitude: b.barberLocation.lat,
                    longitude: b.barberLocation.lng,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                  }}
                  pinColor={'green'}
                >
                  <Components.MapView.Callout style={{ flex: 1, position: 'relative', borderRadius: 5, }} onPress={() => this._barberInfo(b.id)}>
                    <Text><Text style={{fontWeight: 'bold'}}>Barber:</Text> {b.firstName} {b.lastName}</Text>
                    <Text><Text style={{fontWeight: 'bold'}}>Specialty:</Text> {b.specialty}</Text>
                    <TouchableOpacity activeOpacity={.5}>
                      <View style={styles.button}>
                        <Text style={{
                          color: '#fff',
                          fontSize: 18,
                          fontWeight: '700',
                          textAlign: 'center'
                        }}>Select Barber</Text>
                      </View>
                    </TouchableOpacity>
                  </Components.MapView.Callout>
                </Components.MapView.Marker>
              })
            }

            {/* CURRENT LOCATION MARKER */}
            <Components.MapView.Marker
              style={{ alignSelf: 'stretch', height: 350 }}
              pinColor={'darkblue'}
              coordinate={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
              provider={Components.MapView.PROVIDER_GOOGLE}
              onRegionChange={this._handleMapRegionChange}
            >

            </Components.MapView.Marker>
          </Components.MapView>
        </View>
      </View>
    );
  }
  _barberInfo = (id) => {
    this.props.setCurrentBarber(id);
    this.props.navigator.push('barberInfo');
  }

}
const styles = StyleSheet.create({
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,122,255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0,112,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapView: {
    flex: 1,
    backgroundColor: '#000'
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#007AFF'
  },
  button: {
    backgroundColor: '#C79C6B',
    paddingVertical: 10,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
})


const mapStateToProps = state => ({
  ...state.map
});

const mapDispatchToProps = dispatch => ({
  fetchBarbers: () => dispatch(getAllBarbers()),
  setCurrentBarber: (id) => dispatch(setCurrentBarber(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapScreen);
