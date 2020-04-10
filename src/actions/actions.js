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
    }
 }