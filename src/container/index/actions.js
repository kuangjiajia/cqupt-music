import { SHOW_NEWEST,SHOW_PREVIOUS } from './actionTypes.js'

export const showNewest = () => {
    return {
        type: SHOW_NEWEST
    }
}
export const showPrevious = () => {
    return {
        type: SHOW_PREVIOUS
    }
}