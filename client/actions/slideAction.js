import * as types from './types'

export function setCurrentSlideIndex(index) {
    return {
        type: types.SET_CURRENT_SLIDE_INDEX,
        currentIndex: index
    }
}

export function nextSlideIndex() {
    return {
        type: types.NEXT_SLIDE
    }
}

export function prevSlideIndex() {
    return {
        type: types.PREV_SLIDE
    }
}