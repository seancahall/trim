import payApi from '../api/payment';

export function changeCard(cardNumber){
   console.log('hittting action')
   return {
       type: 'CHANGE_CARD',
       payload: { cardNumber }
   }
}

export function changeExpMonth(expMonth) {
   return {
       type: 'ADD_EXP_MONTH',
       payload: { expMonth }
   };
}
export function changeExpYear(expYear) {
   return {
       type: 'ADD_EXP_YEAR',
       payload: { expYear }
   };
}
export function changeCvc(cvc) {
   return {
       type: 'ADD_CVC',
       payload: { cvc }
   };
}

// Post returned cus info into database WITHOUT storing any card info!
export function PostReceipt(orderDetail) {
   return {
       type: 'POST_RECEIPT',
       payload:  payApi.PostReceipt({orderDetail})
   };
}

// Payment Screen
export function addTip(tip) {
   return {
       type: 'ADD_TIP',
       payload: { tip }
   };
}

// Payment Screen
export function addComment(comment) {
   return {
       type: 'ADD_COMMENT',
       payload: { comment }
   };
}

export function addServices(services) {
   return {
       type: 'ADD_SERVICES',
       payload: { services }
   };
}

// Charge the correct customer
export function getCustomer() {
   return {
       type: 'GET_CUSTOMER',
       payload:  payApi.getCustomer()
   }
}
