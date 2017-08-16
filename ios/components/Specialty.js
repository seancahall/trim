import React from 'react';
import { View, Text,TouchableOpacity, StyleSheet, Platform, AsyncStorage, Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native';

export default class Specialty extends React.Component {
  render() {
    return (
      <View style={styles.inputWrap}> 
        <View style={{width: 300, height: 175}}>      
            <Menu className='myMenu'>
                
                <MenuTrigger>
                    <TouchableOpacity activeOpacity={.5} >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Select Service</Text>
                        </View>
                    </TouchableOpacity>
                </MenuTrigger>

                <MenuOptions>
                    <MenuOption>
                        <Text style= {{fontSize: 20, color: 'white', fontWeight: 'bold'}}> Haircut: {this.props.haircut} </Text> 
                    </MenuOption>

                    <MenuOption>    
                        <Text style= {{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Haircut/Beard: {this.props.haircutAndBeard}</Text>
                    </MenuOption>
                </MenuOptions>

            </Menu>
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
    margin:20,
    marginBottom: 0,
    padding:20,
    paddingBottom: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    width:300,
    height: 275
  }
});
const mapDispatchToProps = dispatch => ({
  barberPrices: () => dispatch(getPrices())
});