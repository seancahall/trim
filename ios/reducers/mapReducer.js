const initState = {
    loadingBarberMap: false,
    barbers: [],
    currentBarberId: ''
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_BARBER' :
            return { ...state, currentBarberId: action.payload.barberId};
        case 'FETCH_BARBERS_PENDING' :
            return { ...state, loadingBarberMap: true }; //...state means spread
        case 'FETCH_BARBERS_FULFILLED' :
            return { ...state, loadingBarberMap: false, barbers: action.payload }; //similar to response.data in angular(how we save it to the view)
        default :
            return state

    }
}

export default reducer
