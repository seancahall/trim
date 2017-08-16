import { createRouter } from '@expo/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
// import LinksScreen from '../screens/LinksScreen';
import LoginScreen from '../screens/LoginScreen';
import MapScreen from '../screens/MapScreen';
import RegisterScreen from '../screens/RegisterScreen';
// import SettingsScreen from '../screens/SettingsScreen';
import RootNavigation from './RootNavigation';
import BarberToggleScreen from '../screens/BarberToggleScreen';
import BarberNotificationScreen from '../screens/BarberNotificationScreen';
// import BarberPromptScreen from '../screens/BarberPromptScreen';
import BarberCancelScreen from '../screens/BarberCancelScreen';
import TermsScreen from '../screens/TermsScreen';
import BarberInfoScreen from '../screens/BarberInfoScreen';
import CustomerNotificationScreen from '../screens/CustomerNotificationScreen';
import PaymentScreen from '../screens/PaymentScreen';
import BarberLoginScreen from '../screens/BarberLoginScreen';
import CustomerSurchargeScreen from '../screens/CustomerSurchargeScreen';

export default createRouter(() => ({
  home: () => HomeScreen,
  login: () => LoginScreen,
  map: () => MapScreen,
  register: () => RegisterScreen,
  links: () => LinksScreen,
  settings: () => SettingsScreen,
  rootNavigation: () => RootNavigation,
  barberToggle: () => BarberToggleScreen,
  barberNotification: () => BarberNotificationScreen,
  barberPrompt: () => BarberPromptScreen,
  barberCancel: () => BarberCancelScreen,
  terms: () => TermsScreen,
  barberInfo: () => BarberInfoScreen,
  customerNotification: () => CustomerNotificationScreen,
  paymentScreen : () => PaymentScreen,
  barberLogin: () => BarberLoginScreen,
  customerSurcharge: () => CustomerSurchargeScreen
}));
