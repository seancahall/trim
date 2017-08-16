import React from 'react';
import { View, Text, StyleSheet, Platform, Switch, AsyncStorage } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import { addServices } from '../actions/paymentActions';

var radio_props = [
  { label: 'Haircut', services: 100 },
  { label: 'Haircut And Beard', services: 150 }
];

export default class Barber extends React.Component {

  constructor() {
    super()
    this.state = {
      services: 0
    }
    this.onSelect = this.onSelect.bind(this)
  }

  onSelect(index, services) {
    this.setState({ services })
    this.props.onServicePicked(services);
  }

  render() {
    return (
      <View style={styles.inputWrap}>

          <Text style={{ marginBottom: 20, fontSize: 20, color: '#C79C6B' }}> NAME: <Text style={{ fontSize: 20, color: 'white' }}>{this.props.barber.firstName} {this.props.barber.lastName}</Text></Text>
          <Text style={{ fontSize: 20, color: '#C79C6B' }}> SPECIALTY: <Text style={{ fontSize: 20, color: 'white' }}>{this.props.barber.specialty}</Text>
            {"\n"}
            {"\n"}
          </Text>
          <Text style={{
            color: '#C79C6B',
            alignItems: 'center',
            fontSize: 25,
            fontWeight: '700',
            backgroundColor: 'transparent'
          }}>PICK SERVICE</Text>
          <View>
            <RadioGroup
            color='white'
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={80} >
                <Text style={{ fontSize: 20, color: 'white' }}><Text style={{ fontSize: 18, color: '#C79C6B' }}>HAIRCUT:</Text> $80.00</Text>
              </RadioButton>

              <RadioButton value={100}>
                <Text style={{ fontSize: 20, color: 'white' }}><Text style={{ fontSize: 18, color: '#C79C6B' }}>HAIRCUT AND BEARD:</Text> $100.00</Text>
              </RadioButton>

            </RadioGroup>

            <Text style={styles.text}>{this.state.text}</Text>
          </View>

        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  title: {
    color: '#000',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: '700'
  },
  title2: {
    color: '#000',
    alignItems: 'center',
    fontSize: 15,
    fontWeight: '700'
  },
  subHead: {
    color: '#000',
    alignItems: 'center',
    fontSize: 25,
    fontWeight: '700'
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center'
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
  inputWrap: {
    marginTop: 20,
    padding: 20,
    paddingBottom: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: 5,
    flex: 1
  }
});
const mapStateToProps = state => {
  return {
    services: state.paymentInfo.services
  }
}
const mapDispatchToProps = dispatch => ({
  selectBarber: () => dispatch(getCurrentBarber(id)),
  addServices: (services) => {
    dispatch(addServices(services))
  },
});
