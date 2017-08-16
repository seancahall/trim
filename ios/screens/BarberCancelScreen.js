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
export default class BarberCancelScreen extends React.Component {
  static route = {
    navigationBar: {
      backgroundColor: '#000',
      tintColor: '#fff',
      borderColor: '#C79C6B',
      title: 'BARBER CANCELLATION',
    },
  };
  render() {
    return (
<Image source={require('../assets/images/barbershop-chair.jpg')}
             style={styles.imageContainer}>
    
    <View style={styles.container}>
    <View style={styles.wrapper}>       
       
       <Text style={{color: '#fff', backgroundColor: 'transparent', fontSize: 24, fontWeight: 'bold', paddingVertical: 50}}>-  Are you sure you want to cancel?  -</Text>
          
          <View style={styles.inputWrap}>
                 
           <TextInput backgroundColor='transparent' style={styles.input}
              placeholder='Reason for cancellation'
           />
               
             <TouchableOpacity activeOpacity={.5} onPress={this._barberToggle}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Submit</Text>
                </View>
              </TouchableOpacity>   
          
          </View>
      </View>
  </View>
  </Image>
    );
  }
  _barberToggle = () => {
    this.props.navigator.push('barberToggle');
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
  contentContainer: {
    paddingTop: 80,
  },
  welcomeContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  inputWrap: {
    margin:20,
    marginBottom: 0,
    padding:20,
    paddingBottom: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  input:{
    fontSize: 16,
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,1)'
  }
});