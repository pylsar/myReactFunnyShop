import { LIKES_INCREMENT, LIKES_DECREMENT } from '../types/types'

const initialState = {
    like: 0
}

export function likeReducer(state = initialState, action){
    switch(action.type){
        case LIKES_INCREMENT:{
            return{
                like: state.like +1
            }
        }
        case LIKES_DECREMENT:{
            return{
                like: state.like -1
            }
        }
        default:
            return state
    }
}



