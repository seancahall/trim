import axios from 'axios';
import { AsyncStorage } from 'react-native';


export default {
    register(registrationData){
        return axios
            .post('http://trim-api.herokuapp.com/api/customers',  registrationData )
            .then(response => response.data);
    },
    //CUSTOMER LOGIN
    login(email, password){
        console.log('customer logged in: ' + email + password);
        return axios
            .post('http://trim-api.herokuapp.com/api/customers/login', {email, password} )
            .then(response => {
                AsyncStorage.setItem('authToken', response.data.id);
                AsyncStorage.setItem('customerId', response.data.userId);
                return response.data;
                
            });
    },
    //BARBER LOGIN
    barberLogin(email, password){
        return axios
            .post('http://trim-api.herokuapp.com/api/barbers/login', {email, password} )
            .then(response => {
                AsyncStorage.setItem('userId', response.data.userId);
                AsyncStorage.setItem('authToken', response.data.id);
                return response.data;
            });

    }
};