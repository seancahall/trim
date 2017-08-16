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
  Switch,
  Dimensions,
} from 'react-native';
import { MonoText } from '../components/StyledText';
// const personIcon = require('../assets/images/person-icon2.png');
// const lockIcon = require('../assets/images/lock-icon3.png');
export default class BarberNotificationScreen extends React.Component {
  static route = {
    navigationBar: {
      backgroundColor: '#000',
      tintColor: '#fff',
      borderColor: '#C79C6B',
      borderBottomColor: '#C79C6B',
      title: 'CUSTOMER NOTIFICATION',
    },
  };
  state = {
    eventSwitchIsOn: false,
    eventSwitchRegressionIsOn: true,
    titleText: '',
    bodyText: ''
  };
  render() {
    return (
      <Image
        source={require('../assets/images/hair-clippers.jpg')}
        style={styles.imageContainer}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.wrapper}>
              <View style={styles.welcomeContainer}>
              </View>
              <View style={styles.inputWrap}>
              <Text style={{ color: '#fff', backgroundColor: 'transparent', fontSize: 24, fontWeight: 'bold' }}>-  INCOMING TRIM NOTIFICATION  -</Text>
              <Text style={{ color: '#fff', backgroundColor: 'transparent', fontSize: 14, fontWeight: 'bold' }}>YOUR BARBER IS ON THE WAY!</Text>
              <Text numberOfLines={5} style={{ color: '#fff', backgroundColor: 'transparent', fontSize: 14, fontWeight: 'bold' }}>
                {this.state.bodyText}
              </Text>
              </View>
                </View>
              <TouchableOpacity activeOpacity={.5} onPress={this._customerSurcharge}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>CANCEL</Text>
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
  inputWrap: {
    margin:20,
    marginBottom: 0,
    padding:20,
    paddingBottom: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
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