import { ADD_MUSIC } from './actionTypes.js'

const initialState = []
export default (state=initialState,action) => {
    switch(action.type) {
        case ADD_MUSIC:{
            console.log(123)
            return [
                action['newMessage'],
                ...state
            ]
        }
        default:
            return state
    }
}
