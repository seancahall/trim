import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { getToken, getCustomerId } from '../lib/getToken';

// THE RECEIPT POSTING TO THE DATABASE
export default {
   PostReceipt(orderDetail) {
       console.log('you hit the post api')
       return axios
       .post('http://trim-api.herokuapp.com/api/transactions', JSON.stringify(orderDetail),
           {headers: {'content-type': 'application/json'}})
           .then(response => {
               return response;
           });
   },

// CHARGE THE CURRENT CUSTOMER 
getCustomer(token, userId) {
    return Promise
     .all([getToken(), getCustomerId()])
     .then(([token, userId]) => {
       return axios
         .get(`http://trim-api.herokuapp.com/api/customers/${userId}?access_token=${token}`)
         .then(response => {
            console.log('Customer stuff', response);
            return response.data
          });
    })
  }
}
  
  

