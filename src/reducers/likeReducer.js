import { LIKES_INCREMENT, LIKES_DECREMENT } from '../types/types'

const initialState = {
    like: 0
}

export function likeReducer(state = initialState, action){
    switch(action.type){
        case LIKES_INCREMENT:{
            return{
                ...state, // не уверен, что надо( поидеи чтобы стейт не мутировать, надо добавить)
                like: state.like +1
            }
        }
        case LIKES_DECREMENT:{
            return{
                ...state, // не уверен, что надо( поидеи чтобы стейт не мутировать, надо добавить)
                like: state.like -1
            }
        }
        default:
            return state
    }
}



