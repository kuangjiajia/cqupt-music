import { SHOW_NEWEST, SHOW_PREVIOUS } from './actionTypes.js'
import { ADD_NUM } from './actions.js'

export default (state = {num: 0},action ) => {
    switch(action.Types) {
        case SHOW_NEWEST: {
            return {

            }
        }
        case SHOW_PREVIOUS: {
            return {

            }
        }
        default:
            return state
    }
}

