import {combineReducers} from 'redux'
import {likeReducer} from './likeReducer'
import {authReducer} from './authReducer'
import {calcReducer} from './calcReducer'


// общий редюсер
export const rootReducer = combineReducers({
    //тут набор всех наших редюсеров
    likes: likeReducer,  // likes надо будет передавать в контейнер в mapStateToProps
    auths: authReducer,
    calcs: calcReducer
})