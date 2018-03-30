import { upDateDataNewest, addDataMoreNewest , addNewest } from '../action/newest.js'

const initialState = []

export default (state = initialState,action ) => {
    switch(action.type) {
        case upDateDataNewest: {
            return [
                ...state,...action.data
            ]
        }
        case addDataMoreNewest: {
            return [
                ...state,...action.data
            ]
        }
        case addNewest: {
            return [
                ...state,action.data
            ]
        }
        default:
            return state
    }
}

