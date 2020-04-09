
const LIKES_INCREMENT = 'LIKES_INCREMENT'


// здесь будут жить наши состояния

const initialState = {
    like: 0
}


//actions
export const actions = {
   likeChanged(like){
       return{
           type: LIKES_INCREMENT,
           like
       }
   } 
}

//создадим редюсер
// потом перенести в файл отельный

export function reducer(state = initialState, action){
    switch(action.type){
        case LIKES_INCREMENT:{
        // case LIKES_INCREMENT:
            return{
                // ...state,
                // like: action.like +1
                like: state.like +1
                
            }
            // return state +1
        }
        default:
            return state
    }
}