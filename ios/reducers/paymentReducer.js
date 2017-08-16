const initState = {
   cardNumber: '',
   expMonth: '',
   expYear: '',
   cvc: '',
   tip:0,
   comment:'',
   services:0,
   stripeId: '',
   email: ''
}

const reducer = (state = initState, action) => {        
   switch (action.type){
       case 'CHANGE_CARD' :
           return {
               ...state,
               cardNumber: action.payload.cardNumber
           };
       
       case 'ADD_EXP_MONTH' :
           return {
               ...state,
               expMonth: action.payload.expMonth
           };
       case 'ADD_EXP_YEAR' :
           return {
               ...state,
               expYear: action.payload.expYear
           };
       case 'ADD_CVC' :
           return {
               ...state,
               cvc: action.payload.cvc
           };
       case 'ADD_TIP' :
           return {
               ...state,
               tip: action.payload.tip
           };
       case 'ADD_COMMENT' :
           return {
               ...state,
               comment: action.payload.comment
           };
        case 'GET_CUSTOMER' :
        return {
            ...state,
            email: action.payload.email,
            stripeId: action.payload.stripeId
        }
        case 'ADD_SERVICES' :
           return {
               ...state,
               services: action.payload.services
           };
       default :
           return state
   }
}
export default reducer