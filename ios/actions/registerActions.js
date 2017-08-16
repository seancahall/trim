import regApi from '../api/register';
export function register(firstName, lastName, email, username, password, stripeId){
    return {
        type: 'REGISTER',
        payload: regApi.register (
            {
            firstName,
            lastName,
            email,
            username,
            password,
            stripeId
            
    }
        )
    }
}
export function addFirstName(firstName) {
    return {
        type: 'ADD_FIRST_NAME',
        payload: {firstName: firstName}
    };
}
export function addLastName(lastName) {
    return {
        type: 'ADD_LAST_NAME',
        payload: {lastName: lastName}
    };
}
export function addEmail(email) {
    return {
        type: 'ADD_EMAIL',
        payload: {email: email}
    };
}
export function addUsername(username) {
    return {
        type: 'ADD_USERNAME',
        payload: {username: username}
    };
}
export function addPassword(password) {
    return {
        type: 'ADD_PASSWORD',
        payload: {password: password}
    }
}
