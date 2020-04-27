import * as types from '../types/types'


export const actions = {
    likeChangedIncrement(like){
        return{
            type: types.LIKES_INCREMENT,
            like
        }
    }, 
    likeChangedDecrement(like){
     return{
         type: types.LIKES_DECREMENT,
         like
     }
    },
    modalToggle(){
        return{
            type: types.AUTH_FORM_VISIBLE
        }
    },
    regestered(){
        return{
            type: types.AUTH_FORM_REGESTERD
        }
    },
    calcToggle(){
        return {
            type: types.CALC_VISIBLE
        }
    },
    calcClicked(){
        return{
            type: types.CALC_ISCLICKED,
        }
    },
    calcOnChange(value){
        return{
            type: types.CALC_ONCHANGE,
            payload: value
        }
    }
 }