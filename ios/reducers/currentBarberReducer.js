const initialState = {
    barberId: '',
    isAvailable: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_BARBER' :
            return {...action.payload}
        case 'GET_BARBER_FULFILLED' :
            return { 
                ...action.payload,
                isAvailable: action.payload.isAvailable }
        case 'UPDATE_BARBER_FULFILLED' :
            return { ...action.payload}
        case 'TOGGLE_BARBER' :
            return { 
                ...state, 
                isAvailable: action.payload.isAvailable 
            };
        default:
            return state
    }
}



export default reducer