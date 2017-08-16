import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { getToken, getUserId } from '../lib/getToken';

export default {
  //GRABS ALL BARBERS, CHECKS AND VERIFIFES IF BARBER IS AVAILABLE
  getAllBarbers(){
    return Promise
      .all([getToken()])
      .then(([token]) => {
        return axios
          .get(`http://trim-api.herokuapp.com/api/barbers/?filter[where][isAvailable]=true`, {
            headers: {
              'Authorization': `${token}`
            }
          })
          .then(response => {
            return response.data
          });
      });
  },
  //BARBER TOGGLE
  getMe() {
    return Promise
      .all([getToken(), getUserId()])
      .then(([token, userId]) => {
        return axios
          .get(`http://trim-api.herokuapp.com/api/barbers/${userId}?access_token=${token}`)
          .then(response => {
            return response.data
          });
      });
  },

  getBarberById(token, userId) {
    return Promise
      .all([getToken(), getUserId()])
      .then(([token, userId]) => {
        return axios
          .get(`http://trim-api.herokuapp.com/api/barbers/${userId}?access_token=${token}`)
          .then(response => {
          return response.data
          });
      });
  },

  

//UPDATES A BARBER'S AVAILABILITY
  updateBarber(barber) {
    return Promise
      .all([getToken(), getUserId()])
      .then(([token, userId]) => {
        return axios
          .patch(`http://trim-api.herokuapp.com/api/barbers/${userId}?access_token=${token}`, barber)
          .then(response => {
            return response.data;
          });
      });

 }
}
