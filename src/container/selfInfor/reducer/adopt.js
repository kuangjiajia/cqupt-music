import { addAdoptData, initialAdoptData } from '../action/adopt.js'

const initialState = []

export default (state = initialState,action) => {
    switch(action.type) {
        case addAdoptData: {
            return [...state,...action.data]
        }
        case initialAdoptData: {
            return [...state,...action.data]
        }
        default:
            return state
    }
}