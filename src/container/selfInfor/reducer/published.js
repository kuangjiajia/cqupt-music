import { addPublishedData, initialPublishedData } from '../action/published.js'

const initialState = []

export default (state = initialState,action) => {
    switch(action.type) {
        case addPublishedData: {
            return [...state,...action.data]
        }
        case initialPublishedData: {
            return [...state,...action.data]
        }
        default:
            return state
    }
}