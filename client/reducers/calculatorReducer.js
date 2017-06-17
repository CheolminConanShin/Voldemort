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
        case types.SET_CALCULATOR_DATA: {
            return Object.assign({}, state, {
                cardInfo: action.cardInfo
            })
        }
        case types.TOGGLE_CALCULATOR_VIEW:
            return Object.assign({}, state, {
                toggle: !state.toggle
            })
        case types.TOGGLE_CALCULATOR_VIEW_OFF:
            return Object.assign({}, state, {
                toggle: false
            })
        default:
            return state
    }
}

export default calculatorReducer