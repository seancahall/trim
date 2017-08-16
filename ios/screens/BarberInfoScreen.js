import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  AsyncStorage 
} from 'react-native';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { MonoText } from '../components/StyledText';
import { addServices } from '../actions/paymentActions';
import Barber from '../components/Barber';
class BarberInfoScreen extends React.Component {

  constructor() {
    super()
    this.state = {
      services: 0
    }
    this.onServicePicked = this.onServicePicked.bind(this)
  }

  static route = {
    navigationBar: {
      backgroundColor: '#000',
      tintColor: '#fff',
      borderBottomColor: '#C79C6B',
      title: 'TRIM',
    },
  };

  onServicePicked(services) {
    // dispatch the amount in the payload of an action
    // which will affect the store
    //alert(services);
    this.setState({ services });
    this.props.addServices(services);
  }

  render() {
    return (
      <Image
        source={require('../assets/images/barber-poll.jpg')}
        style={styles.imageContainer}>
        <ScrollView>
          <View style={styles.container}>
              { 
                this.props.currentBarber.map((b, index) => {
                  return <Barber barber={b} key={index} onServicePicked={(services) => this.onServicePicked(services)} />
                })
              }


            <TouchableOpacity activeOpacity={.5} onPress={this._customerSurcharge}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>TRIM</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={.5} onPress={() => Communications.text(this.props.currentBarber[0].barberPhone, 'A trim is being requested')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TEXT YOUR BARBER</Text>
          </View>
          </TouchableOpacity>

            <TouchableOpacity activeOpacity={.5} onPress={this._map}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>CHOOSE ANOTHER BARBER</Text>
              </View>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </Image>
    );
  }
  _customerSurcharge = () => {
    this.props.navigator.push('customerSurcharge');
  }
  _map = () => {
    this.props.navigator.push('map');
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    alignItems: 'center',
    fontSize: 20,
    fontWeight: '700'
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
      width: 0,
    }
  },
  button2: {
    backgroundColor: '#000',
    paddingVertical: 15,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
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
  contentContainer: {
    paddingTop: 80,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: 'transparent'
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  inputWrap: {
    margin: 20,
    marginBottom: 0,
    padding: 20,
    paddingBottom: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
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
});

const mapStateToProps = state => ({
  ...state.map,
  ...state.paymentInfo,
  currentBarber: state.map.barbers.filter(function (barber) {
    return barber.id === state.map.currentBarberId
  })
});

const mapDispatchToProps = dispatch => ({
  getBarber: () => dispatch(getCurrentBarber()),
    addServices: (services) => 
    dispatch(addServices(services))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BarberInfoScreen);