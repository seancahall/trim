import { combineReducers } from 'redux';

//import registerReducer from '../registerReducer';
import loginReducer from './loginReducer';
import mapReducer from './mapReducer';
import barberLoginReducer from './barberLoginReducer';
import currentBarberReducer from './currentBarberReducer';
import registerReducer from './registerReducer';
import paymentReducer from './paymentReducer';


const AppReducer = combineReducers({
     login: loginReducer,
     map: mapReducer,
     barber: barberLoginReducer,
     currentBarber: currentBarberReducer,
     registerForm: registerReducer,
     paymentInfo: paymentReducer


});

export default AppReducer;
