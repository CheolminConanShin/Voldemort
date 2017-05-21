import * as types from './types'

export function setCurrentSlideIndex(index) {
    return {
        type: types.SET_CURRENT_SLIDE_INDEX,
        currentIndex: index
    }
}