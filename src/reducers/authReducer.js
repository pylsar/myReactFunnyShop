import { AUTH_FORM_VISIBLE, AUTH_FORM_REGESTERD } from '../types/types'

const initialState = {
    isVisible: false,
    isRegestered: false,
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
        case AUTH_FORM_VISIBLE: {
            return {
                ...state, // не уверен, что надо( поидеи чтобы стейт не мутировать, надо добавить)
                isVisible: !state.isVisible
            }
        }
        case AUTH_FORM_REGESTERD: {
            return{
                ...state, // надо обязательно, (при повторном клике на ник(после регистрации) - ник не пропадает)
                initialState: initialState, // очищаем если норм
                isRegestered: true, // для имени в углу экрана
                isVisible: false // закрываем если рега норм прошла
            }
        }
        default: 
            return state
    }
}