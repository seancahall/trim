const initState = {
    loggingIn: false,
    email: '',
    password: '',
    stripeId: '',
    services:0
}

const reducer = (state = initState, action) => {
    switch (action.type){
        case 'LOGIN_PENDING' :
            return { ...state, loggingIn: true };
        case 'LOGIN_FULFILLED' :
            return { ...state, loggingIn: false, token: action.payload, stripeId: action.payload.stripeId };
        case 'CHANGE_LOGIN_FIELD' :
            return { ...state, [action.payload.key]: action.payload.value };
        default :
            return state
    }
}

export default reducer