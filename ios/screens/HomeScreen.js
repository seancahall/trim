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
  Dimensions
} from 'react-native';

import { MonoText } from '../components/StyledText';
var deviceWidth = Dimensions.get('window').width;
export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      backgroundColor: '#000',
      tintColor: '#fff',
      borderBottomColor: '#C79C6B',
      title: 'WELCOME TO TRIM',
    },
  };

  render() {
    return (
      <Image source={require('../assets/images/barbershop-chair.jpg')} style={styles.imageContainer}>
      

        <TouchableOpacity activeOpacity={.5} onPress={this._login}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity activeOpacity={.5} onPress={this._terms}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </View>
        </TouchableOpacity>

      </Image>
      
    );
  }

  _login = () => {
    this.props.navigator.push('login');
  }

  _terms = () => {
    this.props.navigator.push('terms');
  }

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
    color: '#000',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: '700',
    paddingTop: 20
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
    image: {
    width: deviceWidth / 1,
    height: deviceWidth / 1
  },
});
