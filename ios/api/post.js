import axios from 'axios';
import { AsyncStorage } from 'react-native';

export default {
    getAllBarbers() {
        const promise = axios
            //.get('http://trim-api.herokuapp.com/api/barbers/59163334a09881001137cee1?access_token=VqBqFWyGUbtgyBxONYZ0NxGotceUG2nSAtCeZP4FnvmaHuFLPrb07xDLKBF9pGbn')
            .get('http://trim-api.herokuapp.com/api/barbers/?access_token=0a09bwYKkNBDU6WQVzHZMYUFaDYbW82S5N7xDVGdG40Ks8yZzeNInCKVmie6ej9D')
            .then(response => {
                console.log(response.data)
                return response.data
            });
        return promise;

    }
}
