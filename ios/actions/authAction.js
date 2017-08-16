import authApi from '../api/auth';

export function login(email, password) {
    return {
        type: 'LOGIN',
        payload: authApi.login(email, password)
    };
}

export function barberLogin(email, password){
    return {
        type: 'BARBER_LOGIN',
        payload: authApi.barberLogin(email, password)
    };
}

export function changeField(key, value){
    return {
        type: 'CHANGE_LOGIN_FIELD',
        payload: { key, value }
    }
}

