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
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { barberLogin, changeField } from '../actions/authAction';
import { MonoText } from '../components/StyledText';
// const personIcon = require('../assets/images/person-icon2.png');
// const lockIcon = require('../assets/images/lock-icon3.png');
class BarberLoginScreen extends React.Component {
  static route = {
    navigationBar: {
      backgroundColor: '#000',
      tintColor: '#fff',
      borderBottomColor: '#C79C6B',
      title: 'TRIM',
    },
  };
componentDidUpdate(){
  if(this.props.token){
    this.props.navigator.push('barberToggle');
  }
}
  render() {
    return (
      <Image
          source={require('../assets/images/barbershop-chair.jpg')}
          style={styles.imageContainer}>
          <View style={styles.inputWrap}>
            <Text  style={{marginTop: 10, textAlign: 'center', backgroundColor: 'transparent', fontSize: 18, fontWeight: 'bold', color: '#C79C6B'}}> EMAIL </Text>
            <TextInput
              placeholder="EmailAddress"
              style={styles.input}
              value={this.props.email}
              //onBlur={this.updateInput}
              onChangeText={(text) => this.props.changeField('email', text)}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputWrap}>
            <Text  style={{marginTop: 10, textAlign: 'center', backgroundColor: 'transparent', fontSize: 18, fontWeight: 'bold', color: '#C79C6B'}}> PASSWORD </Text>
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.input}
              value={this.props.password}
              //onBlur={this.updateInput}
              onChangeText={(text) => this.props.changeField('password', text)}
              underlineColorAndroid="transparent"
            />
          </View>
          <TouchableOpacity activeOpacity={.5} onPress={() => this.props.barberLogin(this.props.email, this.props.password)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Log In</Text>
            </View>
          </TouchableOpacity>
          </Image>
    );
  }
  _barberToggle = () => {
    this.props.navigator.push('barberToggle');
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    color: '#000',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: '700'
  },
  background: {
    width: null,
    height: null,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20
  },
  logoImage: {
    width: 140,
    height: 38
  },
  inputWrap: {
    flexDirection: 'row',
    marginVertical: 10,
    height: 40,
    backgroundColor: '#fff',
    opacity: 0.9,
    justifyContent: 'center',
    marginHorizontal: 15,
    borderRadius:5,
    paddingHorizontal: 10
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  wrapper: {
    paddingTop: 50,
    paddingHorizontal: 15,
    marginLeft: 20,
    justifyContent: 'center'
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2980B9'
  },
  icon: {
    width: 20,
    height: 20
  },
  button: {
    backgroundColor: '#C79C6B',
    opacity: 0.9,
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
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 140,
    height: 38,
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
//GETTING DATA IN
//taking a place of the redux store
//and passing it to this component
const mapStateToProps = state => ({
    ...state.barber
});
//GETTING DATA OUT
//mapping events that can happen in a component
//to actions that will be dispatched through the redux store
const mapDispatchToProps = dispatch => ({
  barberLogin: (email, password) => dispatch (barberLogin(email, password)),
  changeField: (key, value) => dispatch (changeField(key,value))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BarberLoginScreen);