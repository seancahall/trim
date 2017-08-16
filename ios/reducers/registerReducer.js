const initState = {
   firstName: '',
   lastName: '',
   email: '',
   username: '',
   password: ''
}
const reducer = (state = initState, action) => {
   switch (action.type){
       case 'ADD_FIRST_NAME' :
           return {
               ...state,
               firstName: action.payload.firstName
           };
       
       case 'ADD_LAST_NAME' :
           return {
               ...state,
               lastName: action.payload.lastName
           };
       case 'ADD_EMAIL' :
           return {
               ...state,
               email: action.payload.email
           };
       case 'ADD_USERNAME' :
           return {
               ...state,
               username: action.payload.username
           };
        case 'ADD_PASSWORD' :
           return {
               ...state,
               password: action.payload.password
           };
   
       default :
           return state
   }
}
export default reducer