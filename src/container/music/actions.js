import { ADD_MUSIC } from './actionTypes.js'

export const addMusic = (json) => {
    return {
        "type": ADD_MUSIC,
        "newMessage": json
    }
}