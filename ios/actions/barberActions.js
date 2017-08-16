import barberApi from '../api/barber';

// WHEN MAP LOADS, LOCATE ALL AVAILABLE BARBERS
export function getAllBarbers(){
    return {
        type: 'FETCH_BARBERS',
        payload: barberApi.getAllBarbers()
    };
}

// WHEN 'POPUP' ON MAP IS CLICKED, LOCATE THAT EXACT BARBER
export function getCurrentBarber(userId){
    return {
        type: 'GET_BARBER',
        payload: barberApi.getBarberById(userId)
    };
}

// BARBER TOGGLE 
export function updateBarber(currentBarber){
    return {
        type: 'UPDATE_BARBER',
        payload: barberApi.updateBarber(currentBarber)
    };
}

export function setCurrentBarber(barberId){
    return {
        type: 'SET_BARBER',
        payload: {barberId: barberId}
    };
}

export function toggleBarber(isAvailable) {
    return {
        type: 'TOGGLE_BARBER',
        payload: {isAvailable: isAvailable}
    };
}
