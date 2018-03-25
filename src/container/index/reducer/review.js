import API from '../../../api/api.js'
import { upDateDataReview, addDataMoreReview } from '../action/review.js'

const initialState = []

export default (state = initialState,action ) => {
    switch(action.type) {
        case upDateDataReview: {
            console.log(action.data)
            return [
                ...state,...action.data
            ]
        }
        case addDataMoreReview: {
            return [
                ...state,...action.data
            ]
        }
        default:
            return state
    }
}

