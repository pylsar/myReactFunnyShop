import { CALC_VISIBLE, CALC_ISCLICKED, CALC_ONCHANGE } from '../types/types'

const initialState = {
    valueInput: '',
    result: '',
    isClicked: false,
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
        case CALC_ISCLICKED:{
            return{
                ...state, // не уверен, что надо( поидеи чтобы стейт не мутировать, надо добавить)
                isClicked: true,
                result: state.valueInput * 8.5
            }
        }
        case CALC_ONCHANGE:{
            return{
                ...state,
                valueInput: action.payload
            }
        }
        default: 
            return state
    }
}