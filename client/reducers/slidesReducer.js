import * as types from '../actions/types'

const initialState = {
    currentIndex: 0
}

const slidesReducer = (state = initialState, action) => {
    switch (action.type) {
        case(types.SET_CURRENT_SLIDE_INDEX):
            return Object.assign({}, state, {
                currentIndex: action.currentIndex
            })
        default:
            return state;
    }
}

export default slidesReducer