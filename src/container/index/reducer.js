import { SHOW_NEWEST, SHOW_PREVIOUS } from './actionTypes.js'
const initialState = []

export default (state = initialState,action ) => {
    switch(action.Types) {
        case SHOW_NEWEST: {
            return [
                ...state,action.NewestData
            ]
        }
        case SHOW_PREVIOUS: {
            return {

            }
        }
        default:
            return state
    }
}

