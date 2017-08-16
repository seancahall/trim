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
  Switch,
  Dimensions,
} from 'react-native';

import { connect } from 'react-redux';
import { MonoText } from '../components/StyledText';
import { FontAwesome } from '@expo/vector-icons';
import { getCurrentBarber, updateBarber } from '../actions/barberActions';
import io from 'socket.io-client/dist/socket.io';

class BarberToggleScreen extends React.Component {
  static route = {
    navigationBar: {
      backgroundColor: '#000',
      tintColor: '#fff',
      borderBottomColor: '#C79C6B',
      title: 'TRIM',
    },
  };
  state = {
    eventSwitchIsOn: false,
    eventSwitchRegressionIsOn: true,
    barberLocation: {
        lat: 0,
        lng: 0
      }
  };
  
  toggleAvailability = (value, position) => {
    //  var location = this.barberLocation();
    this.props.toggleA(this.props.currentBarber, value, position);
    if (value === true) {
    const socket = io.connect('http://localhost:3002/');
        socket.emit('barber available', this.props.currentBarber.id);
      
   }
    
  }

 barberLocation(value){
   navigator.geolocation.getCurrentPosition(
   (position) => {
        this.toggleAvailability(value, {lat: position.coords.latitude,
          lng: position.coords.longitude})
          this.props.navigator.push('barberNotification')
      },
      (error) => console.log({ error: error.message })
    );
 }

  componentWillMount() {
    // const socket = io.connect('http://localhost:3002/');
    //     socket.emit('barber available', this.props.currentBarber.id);
    this.props.getCurrentBarber(this.props.currentBarber.id);
  }

// componentDidMount() {
//     console.log("COMPONENT DID MOUNT?" + JSON.stringify(this.props.currentBarber));
//     if (this.props.currentBarber.isAvailable === true) {
//     toggleAvailability(true, this.props.currentBarber.position);
//     }
// }

   
  render() {
    // console.log("checking render: " + this.props.currentBarber.isAvailable);
    return (
      <ScrollView>
        <Image
          source={require('../assets/images/barbershop-chair.jpg')}
          style={styles.imageContainer}>
          <View style={styles.wrapper}>
            {/*<View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>*/}
              {/*<View>
                <Text style={{ color: '#fff', backgroundColor: 'transparent', fontSize: 18, fontWeight: 'bold', paddingVertical: 50 }}>Are you available to trim?</Text>
                <Switch
                  onValueChange={(value) => this.barberLocation(value)}
                  style={{ marginBottom: 10 }}
                  value={this.props.currentBarber.isAvailable} />
                <Text style={{ color: '#fff', backgroundColor: 'transparent' }}>{this.props.currentBarber.isAvailable ? 'On' : 'Off'}</Text>
                <Text style={{ color: '#fff', backgroundColor: 'transparent' }}>
                  {/*{JSON.stringify(this.props.currentBarber, null, 2)}*/}
                {/*</Text>
              </View>
              <TouchableOpacity activeOpacity={.5} onPress={this._barberNotification} style={{ paddingTop: 75 }}>
               <Text style={{backgroundColor: 'transparent', paddingVertical: 30}}> <FontAwesome name='sign-in' size={40} color='#fff' ></FontAwesome></Text>
              </TouchableOpacity>
            </View>*/}

        <TouchableOpacity activeOpacity={.5} onPress={() => this.barberLocation(true)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Are you available for a trim?</Text>
          </View>
          </TouchableOpacity>




          </View>
        </Image>
      </ScrollView>
    );
  }
  // _barberNotification = () => {
  //   this.props.navigator.push('barberNotification');
  // }
}
const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
  },
  title: {
    color: '#000000',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: '700',
    paddingTop: 20
  },
  button: {
    backgroundColor: '#C79C6B',
    opacity: 0.8,
    paddingVertical: 15,
    marginVertical: 15,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: '#C79C6B',
    borderStyle: 'solid',
    borderWidth: 1,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center'
  },
  wrapper: {
    paddingTop: 50,
    paddingHorizontal: 15,
    marginLeft: 20,
    justifyContent: 'center'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 15,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 80,
  },
  welcomeContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 140,
    height: 100,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
const mapStateToProps = state => ({
  currentBarber: {
    ...state.currentBarber
  }
});
const mapDispatchToProps = dispatch => ({
  toggleA: (currentBarber, isAvailable, barberLocation) => {
    var action = updateBarber({
      isAvailable,
      barberLocation
    })
    // dispatches that action
    dispatch(action)
  },
  getCurrentBarber: () => dispatch(getCurrentBarber())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarberToggleScreen);