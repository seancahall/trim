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
import {
  addTip,
  addComment,
  addServices,
  PostReceipt,
  getCustomer
} from '../actions/paymentActions';
import Stripe from 'react-native-stripe-api';
import { MonoText } from '../components/StyledText';
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';
import Specialty from '../components/Specialty';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
var deviceWidth = Dimensions.get('window').width;
class PaymentScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tip: 0,
      comment: 'Trim Receipt',
      returnedCusInfo: {}
    }
    this.componentWillMount = this.componentWillMount.bind(this)
  }
  static route = {
    navigationBar: {
      backgroundColor: '#000',
      tintColor: '#fff',
      borderColor: '#C79C6B',
      borderBottomColor: '#C79C6B',
      title: 'TRIM',
    },
  };

  getInitialState() {
    return {
      stripeLoading: true,
      stripeLoadingError: false,
      submitDisabled: false,
      paymentError: null,
      paymentComplete: false,
      token: null,
      total: null
    };
  }

  componentWillMount() {
    this.props.getCustomer().then((response) => {
      const returnedCusInfo = response.value
      this.setState({ returnedCusInfo });
    })
  }

  payment() {
    console.log(this.state.returnedCusInfo.email)
    const total = parseInt(this.props.paymentInfo.tip) + parseInt(this.props.paymentInfo.services);
    const apiKey = 'sk_test_mrPuahWqnBucE2o5NPPhdvwM';
    const client = new Stripe(apiKey);
    console.log('total', total);
    const charge = client.createCharge(
      total*100,
      this.state.returnedCusInfo.stripeId,
      this.props.paymentInfo.comment,
      "usd",
      this.state.returnedCusInfo.email
    ).then((response) => {
      console.log("here is your stripe response succesful", response)
      this.props.PostReceipt(response);
    })
  }

  render() {
    return (
      <Image
        source={require('../assets/images/barber-poll.jpg')}
        style={styles.imageContainer}>

        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <View style={styles.wrapper}>

              <View style={styles.inputWrap}>
                <View style={{borderBottomColor:'#C79C6B', borderBottomWidth: 2}}>
                  <Text style={{textAlign: 'center', backgroundColor: 'transparent', fontSize: 30, fontWeight: 'bold', color: '#C79C6B'}}>YOUR TOTAL TODAY IS</Text>
                  <Text style={{marginBottom: 10, textAlign: 'center', backgroundColor: 'transparent', fontSize: 30, fontWeight: 'bold', color: 'white'}}>${parseInt(this.props.paymentInfo.tip) + parseInt(this.props.paymentInfo.services)}.OO</Text>
                </View>
                <Text  style={{marginTop: 10, textAlign: 'center', backgroundColor: 'transparent', fontSize: 18, fontWeight: 'bold', color: '#C79C6B'}}> TIP </Text>
                <TextInput
                  backgroundColor='transparent'
                  style={styles.input}
                  placeholder='Tip'
                  onChangeText={this.props.addTip}
                  value={this.props.tip}
                />
                <Text  style={{textAlign: 'center', backgroundColor: 'transparent', fontSize: 18, fontWeight: 'bold', color: '#C79C6B'}}> COMMENT </Text>
                <TextInput
                  backgroundColor='transparent'
                  style={styles.input}
                  placeholder='Comment'
                  onChangeText={this.props.addComment}
                  value={this.props.comment}
                />

                <TouchableOpacity activeOpacity={.5} onPress={() => this.payment()}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>SUBMIT PAYMENT</Text>
                  </View>
                </TouchableOpacity>
                <Image style={styles.image} resizeMode='contain' source={require('../assets/images/payment-powered-by-stripe.png')} />

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
    marginTop: 10,
    marginBottom: 15,
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
    width: 250,
    
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
    flex: 1,
    margin: 10,
    marginBottom: 80,
    padding: 10,
    paddingBottom: 5,
    alignSelf: 'stretch',
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 3,
      width: 1
    }
  },
  input: {
    fontSize: 16,
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,1)'
  },
  inputWrap2: {
    margin: 20,
    marginBottom: 0,
    padding: 20,
    paddingBottom: 50,
    alignSelf: 'stretch',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 5
  }
});
const mapStateToProps = state => ({
  paymentInfo: {
    ...state.paymentInfo
  }
});
const mapDispatchToProps = dispatch => ({
  changeCard: (cardNumber) => dispatch(changeCard(cardNumber)),
  addTip: (tip) => dispatch(addTip(tip)),
  addServices: (services) => dispatch(addServices(services)),
  addComment: (comment) => dispatch(addComment(comment)),
  PostReceipt: (token) => dispatch(PostReceipt(token)),
  getCustomer: (id) => dispatch(getCustomer(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(PaymentScreen)