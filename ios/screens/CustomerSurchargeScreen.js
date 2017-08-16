import React from 'react';
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
  PickerIOS,
  Dimensions,
} from 'react-native';
import { MonoText } from '../components/StyledText';
var PickerItemIOS = PickerIOS.Item;
// const personIcon = require('../assets/images/person-icon2.png');
// const lockIcon = require('../assets/images/lock-icon3.png');
export default class CustomerSurchargeScreen extends React.Component {
  static route = {
    navigationBar: { 
      backgroundColor: '#000',
      tintColor: '#fff',
      borderColor: '#C79C6B',
      borderBottomColor: '#C79C6B',
      title: 'TRIM',
    },
  };
  render() {
    return (
<Image source={require('../assets/images/barbershop-chair.jpg')}
             style={styles.imageContainer}>

    <View style={styles.container}>
    <View style={styles.wrapper}>
      <View style={styles.inputWrap}>
        <View style={{borderBottomColor:'#C79C6B', borderBottomWidth: 2}}>
       <Text style={{textAlign: 'center', backgroundColor: 'transparent', fontSize: 30, fontWeight: 'bold', color: 'white'}}>CANCELLATION DISCLAIMER</Text>
       </View>
        <Text style={{textAlign: 'center', color: '#fff', backgroundColor: 'transparent', fontSize: 18, fontWeight: 'bold', marginTop: 10}}>
          As a reimbursement to our Barbers, if you choose to cancel your appointment
          <Text style={{fontWeight: 'bold', color: '#C79C6B'}}> 5 MINUTES AFTER </Text> 
          the Barber accepts and is on their way, your card on file will be charged 
          <Text style={{fontWeight: 'bold', color: '#C79C6B'}}> 20% </Text>of bill.</Text>
        <TouchableOpacity activeOpacity={.5} onPress={this._map}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>CANCEL</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.5} onPress={this._paymentScreen}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>CONTINUE</Text>
          </View>
        </TouchableOpacity>
      </View>
  </View>
  </View>
  </Image>
    );
  }
  _map = () => {
    this.props.navigator.push('map');
  }
  _paymentScreen = () => {
    this.props.navigator.push('paymentScreen');
  }
}
exports.title = '<Switch>';
exports.displayName = 'SwitchExample';
exports.description = 'Native boolean input';
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
    color: '#000',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: '700',
    paddingTop: 20,
    marginBottom: 10
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
  contentContainer: {
    paddingTop: 80,
  },
  welcomeContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
   inputWrap: {
    margin: 10,
    marginBottom: 80,
    padding: 10,
    paddingBottom: 5,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(0,0,0, 0.7)',
    borderRadius: 5

  },
  input:{
    fontSize: 16,
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,1)'
  }
});
