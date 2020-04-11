import { AUTH_FORM } from '../types/types'

const initialState = {
    isVisible: false
    // isRegestered: false,
    // firstname: '',
    // lastname: '',
    // email: '',
    // password: '',
    // firstnameError: '',
    // lastnameError: '',
    // emailError: '',
    // passwodError: ''
}


export function authReducer(state = initialState, action){
    switch(action.type){
        case AUTH_FORM: {
            return {
                isVisible: !state.isVisible
            }
        }
        default: 
            return state
    }
}