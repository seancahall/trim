import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { MonoText } from '../components/StyledText';
export default class TermsScreen extends React.Component {
  static route = {
    navigationBar: {
     visible: true,
      backgroundColor: '#000',
      tintColor: '#fff',
      borderBottomColor: '#C79C6B',
      title: 'TERMS AND CONDITIONS'
    },
  };
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.welcomeContainer}>

            <Text style={{fontWeight: 'bold', color: '#C79C6B'}}>Terms and Conditions</Text>
          </View>
          <Text style={{fontWeight: 'bold', color: 'white'}}>Please read these Terms and Conditions carefully before using the Trim application operated by Trim.
          Your access to and use of the Service is conditioned on your acceptance of and compliance with
          these Terms. These Terms apply to all visitors, users and others who access or use the Service.
          By accessing or using the Service you agree to be bound by these Terms. If you disagree
          with any part of the terms then you may not access the Service.</Text>
          <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#C79C6B'}}>- Purchases -</Text>
          <Text style={{fontWeight: 'bold', color: 'white'}}>If you wish to purchase any service made available through the Trim App,
          you may be asked to supply certain information relevant to your Purchase including, without
          limitation.
          The Purchases section is for businesses that sell online. For the full
          disclosure section, create your own Terms and Conditions.</Text>
          <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#C79C6B'}}>- Content -</Text>
          <Text style={{fontWeight: 'bold', color: 'white'}}>Our Service may contain links to third­party web sites or services that are not owned or controlled
          by Trim (change this). Trim has no control over, and assumes no responsibility for, the content,
          privacy policies, or practices of any third party web sites or services. You further acknowledge and
          agree that My Company (change this) shall not be responsible or liable, directly or indirectly, for any
          damage or loss caused or alleged to be caused by or in connection with use of or reliance on any
          such content, goods or services available on or through any such web sites or services.</Text>
          <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#C79C6B'}}>- Changes - </Text>
          <Text style={{fontWeight: 'bold', color: 'white'}}>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
          revision is material we will try to provide at least 30 (change this) days notice prior to any new terms
          taking effect. What constitutes a material change will be determined at our sole discretion.</Text>
          <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#C79C6B'}}>- Contact Us - </Text>
          <Text style={{fontWeight: 'bold', color: 'white'}}>If you have any questions about these Terms, please contact us.</Text>
          <TouchableOpacity activeOpacity={.5} onPress={this._register}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>ACCEPT</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.5} onPress={this._home}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>DECLINE</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    );
  }
  _register = () => {
    this.props.navigator.push('register');
  }
  _home = () => {
    this.props.navigator.push('home');
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  title: {
    color: '#000',
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
    alignItems: 'center',
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
