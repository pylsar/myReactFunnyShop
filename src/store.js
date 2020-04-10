
// const LIKES_INCREMENT = 'LIKES_INCREMENT'
// const LIKES_DECREMENT = 'LIKES_DECREMENT'


// здесь будут жить наши состояния

// const initialState = {
//     like: 0
// }


//actions
// export const actions = {
//    likeChangedIncrement(like){
//        return{
//            type: LIKES_INCREMENT,
//            like
//        }
//    }, 
//    likeChangedDecrement(like){
//     return{
//         type: LIKES_DECREMENT,
//         like
//     }
//    }
// }

//создадим редюсер
// потом перенести в файл отельный

// export function reducer(state = initialState, action){
//     switch(action.type){
//         case LIKES_INCREMENT:{
//             return{
//                 like: state.like +1
//             }
//         }
//         case LIKES_DECREMENT:{
//             return{
//                 like: state.like -1
//             }
//         }
//         default:
//             return state
//     }
// }