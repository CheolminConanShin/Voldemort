import * as types from '../actions/types'

const initialState = {
    toggle: false
}

const calculatorReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.TOGGLE_CALCULATOR_VIEW:
            return Object.assign({}, state, {
                toggle: !state.toggle
            })
        default:
            return state
    }
}

export default calculatorReducer