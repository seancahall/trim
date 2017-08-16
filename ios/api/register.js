import axios from 'axios';
import { AsyncStorage } from 'react-native';
export default {
    register(registrationData){
    console.log("just before registration data" + JSON.stringify(registrationData));
        return axios
            .post('http://trim-api.herokuapp.com/api/customers',  JSON.stringify(registrationData), 
            {headers: {'content-type': 'application/json'}})
            .then(response => {
                console.log('register info', response);
                AsyncStorage.setItem('authToken', response.data.id);
                console.log('auth TOKEN', response.data.id);
                return response.data;
    })
  }
}