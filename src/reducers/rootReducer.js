// общий редюсер
import {combineReducers} from 'redux'
import {likeReducer} from './likeReducer'


export const rootReducer = combineReducers({
    //тут набор всех наших редюсеров
    likes: likeReducer  // likes надо будет передавать в контейнер в mapStateToProps
})