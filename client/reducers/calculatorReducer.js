import * as types from '../actions/types'

const initialState = {
    toggle: false,
    cardInfo: {
        total: '',
        used: ''
    },
    currentValue: 0
}

const calculatorReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.TOGGLE_CALCULATOR_VIEW_ON:
            return Object.assign({}, state, {
                toggle: !state.toggle,
                cardInfo: action.cardInfo
            })
        case types.TOGGLE_CALCULATOR_VIEW_OFF:
            return Object.assign({}, state, {
                toggle: !state.toggle
            })
        default:
            return state
    }
}

export default calculatorReducer