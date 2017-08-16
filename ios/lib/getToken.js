import { AsyncStorage } from 'react-native';

export function getToken() {
    return AsyncStorage.getItem('authToken');
}

export function getUserId(){
    return AsyncStorage.getItem('userId');
}

export function getCustomerId(){
    return AsyncStorage.getItem('customerId');
}