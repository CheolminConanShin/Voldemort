import * as types from './types'

export const toggleCalculatorView = () => {
    return {
        type: types.TOGGLE_CALCULATOR_VIEW
    }
}

export const setCalculatorData = (cardInfo) => {
    return {
        type: types.SET_CALCULATOR_DATA,
        cardInfo: cardInfo
    }
}