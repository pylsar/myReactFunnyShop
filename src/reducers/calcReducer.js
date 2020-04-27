import { CALC_VISIBLE } from '../types/types'

const initialState = {
    // value: '',
    // result: '',
    // isClicked: false,
    isVisibleCalc: false
}


export function calcReducer(state = initialState, action){
    switch(action.type){
        case CALC_VISIBLE: {
            return {
                ...state, // не уверен, что надо( поидеи чтобы стейт не мутировать, надо добавить)
                isVisibleCalc: !state.isVisibleCalc
            }
        }
        default: 
            return state
    }
}