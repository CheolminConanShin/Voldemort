import * as types from '../actions/types'

const initialState = {
    currentIndex: 1
}

export const slidesReducer = (state = initialState, action) => {
    switch (action.type) {
        case(types.SET_CURRENT_SLIDE_INDEX):
            return Object.assign({}, state, {
                currentIndex: action.currentIndex
            })

        case(types.NEXT_SLIDE):
            return Object.assign({}, state, {
                currentIndex: state.currentIndex + 1
            })

        case(types.PREV_SLIDE):
            return Object.assign({}, state, {
                currentIndex: state.currentIndex - 1
            })

        default:
            return state;
    }
};
