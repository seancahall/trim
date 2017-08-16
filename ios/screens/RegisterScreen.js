import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Switch,
  TextInput,
  TouchableOpacity,
  View,
  PickerIOS,
  Dimensions,
} from 'react-native';
import { MonoText } from '../components/StyledText';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
var PickerItemIOS = PickerIOS.Item;
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import {  
          addFirstName, 
          addLastName,
          addEmail,
          addUsername,
          addPassword,
          register
        } from '../actions/registerActions';
import {  
          changeCard, 
          changeExpMonth,
          changeExpYear,
          changeCvc,
          PostReceipt
        } from '../actions/paymentActions';
import Stripe from 'react-native-stripe-api';
var deviceWidth = Dimensions.get('window').width;
class RegisterScreen extends React.Component {
  static route = {
    navigationBar: {
      backgroundColor: '#000',
      tintColor: '#fff',
      borderBottomColor: '#C79C6B',
      title: 'TRIM',
    },
  };

// When register button pushed, trigger registration, stripe and alert saying 'Log In' 
registerAndPush() {
  this.stripe();
  alert('Registered successfully! Please log in...')
  this.props.navigator.push('login');
}
stripe() {
  const apiKey = 'sk_test_mrPuahWqnBucE2o5NPPhdvwM';
  const client = new Stripe(apiKey);
  client.createToken( this.props.cardNumber, this.props.expMonth, this.props.expYear, this.props.cvc).then((token) => {
    const newToken = token.id;
    const customer = client.createCustomer(newToken, this.props.email , this.props.username, this.props.firstName , this.props.lastName).then((customer) => {
      const stripeId = customer.id;
      this.registration(stripeId)
    })
  })
}
registration(stripeId) {
  console.log('Hit Registration', stripeId);
  this.props.register(
            this.props.firstName,
            this.props.lastName,
            this.props.email,
            this.props.username,
            this.props.password,
            stripeId);
}

  render() {
    return (
<Image source={require('../assets/images/barbershop-chair.jpg')}
             style={styles.imageContainer}>
    <KeyboardAwareScrollView>
    <View style={styles.container}>
    <View style={styles.wrapper}>
      <View style={styles.inputWrap}>
       <Text style={{textAlign: 'center', color: '#C79C6B', backgroundColor: 'transparent', fontSize: 18, fontWeight: 'bold', paddingVertical: 15}}>CREATE AN ACCOUNT</Text>
          <View style={styles.inputWrap}>
            {/*Registration inputs*/}
           <TextInput backgroundColor='transparent' 
           style={styles.input}
           onChangeText={this.props.addFirstName}
           value={this.props.firstName}
           required="required"
              placeholder='First Name'
              underlineColorAndroid="transparent"              
           />
           <TextInput backgroundColor='transparent' 
           style={styles.input}
           onChangeText={this.props.addLastName}
           value={this.props.lastName}
           required="required"
              placeholder='Last Name'
              underlineColorAndroid="transparent"              
           />
           <TextInput backgroundColor='transparent'
            style={styles.input}
            onChangeText={this.props.addEmail}
            value={this.props.email}
           required="required"
              placeholder='E-Mail'
              underlineColorAndroid="transparent"
           />
           <TextInput backgroundColor='transparent' 
           style={styles.input}
           onChangeText={this.props.addUsername}
           value={this.props.username}
           required="required"
              placeholder='username'
              underlineColorAndroid="transparent"
           />
            <TextInput backgroundColor='transparent' 
            style={styles.input}
            onChangeText={this.props.addPassword}
            value={this.props.password}
            required="required"
            placeholder='Password'
            secureTextEntry
            underlineColorAndroid="transparent"
           />
       <Text style={{textAlign: 'center', color: '#C79C6B', backgroundColor: 'transparent', fontSize: 18, fontWeight: 'bold', paddingVertical: 15}}>REGISTER CARD INFORMATION </Text>
           <TextInput
              backgroundColor='transparent' 
              style={styles.input}
              placeholder='Card Number'
              onChangeText={this.props.changeCard}
              value={this.props.cardNumber}
           />
           <TextInput 
              backgroundColor='transparent' 
              style={styles.input}
              placeholder='Exp. Month'
              onChangeText={this.props.changeExpMonth}
              value={this.props.expMonth}
           />
           <TextInput
              backgroundColor='transparent' 
              style={styles.input}
              placeholder='Exp. Year'
              onChangeText={this.props.changeExpYear}
              value={this.props.expYear}
           />
           <TextInput 
              backgroundColor='transparent' 
              style={styles.input}
              placeholder='CVC'
              onChangeText={this.props.changeCvc}
              value={this.props.cvc}
           />
           {/*Stripe Image*/}
           <Image style={styles.image} resizeMode='contain' source={require('../assets/images/payment-powered-by-stripe.png')} />
          <TouchableOpacity activeOpacity={.5} onPress={() => this.registerAndPush()}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Process</Text>
                </View>
            </TouchableOpacity>
         </View>
      </View>
     </View>
     </View>
    </KeyboardAwareScrollView>
  </Image>
    );
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
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
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
  image: {
    height: 150,
    width: 250
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center'
  },
  wrapper: {
    paddingTop: 30,
    paddingHorizontal: 15,
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
    margin: 1,
    marginBottom: 80,
    padding: 10,
    paddingBottom: 0,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(0,0,0, 0.7)',
    borderRadius: 5

  },
  
  input: {
    fontSize: 16,
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255, .8)',
    borderWidth: 1,
    borderBottomColor: 'black',
    borderRadius: 5

  },
  inputWrap2: {
    margin: 20,
    marginBottom: 0,
    padding: 20,
    paddingBottom: 50,
    alignSelf: 'stretch',
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderRadius: 5
  }
});
//GETTING DATA IN
//taking a place of the redux store
//and passing it to this component
const mapStateToProps = state => {
  return {
    firstName: state.registerForm.firstName,
    lastName: state.registerForm.lastName,
    email: state.registerForm.email,
    username: state.registerForm.username,
    password: state.registerForm.password,
    cardNumber: state.paymentInfo.cardNumber,
    expMonth: state.paymentInfo.expMonth,
    expYear: state.paymentInfo.expYear,
    cvc: state.paymentInfo.cvc
  }
}
//GETTING DATA OUT
//mapping events that can happen in a component
//to actions that will be dispatched through the redux store
const mapDispatchToProps = dispatch => ({
  addFirstName: (firstName) => {
    dispatch(addFirstName(firstName))
  },
  addLastName: (lastName) => {
    dispatch(addLastName(lastName))
  },
  addEmail: (email) => {
    dispatch(addEmail(email))
  },
  addUsername: (username) => {
    dispatch(addUsername(username))
  },
  register: (firstName, lastName, email, username, password, stripeId) => { 
    dispatch(register(firstName, lastName, email, username, password, stripeId))
  },
  changeCard: (cardNumber) => {
    dispatch(changeCard(cardNumber))
  },
  changeExpMonth: (expMonth) => {
    dispatch(changeExpMonth(expMonth))
  },
  changeExpYear: (expYear) => {
    dispatch(changeExpYear(expYear))
  },
  changeCvc: (cvc) => {
    dispatch(changeCvc(cvc))
  },
  PostReceipt: (token) => {
    dispatch(PostReceipt(token))
  },
    addPassword: (password) => {
    dispatch(addPassword(password))
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)