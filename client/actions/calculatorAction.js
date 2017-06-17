import * as types from './types'

export const toggleCalculatorViewON = () => {
    return {
        type: types.TOGGLE_CALCULATOR_VIEW_ON
    }
}

export const toggleCalculatorViewOFF = () => {
    return {
        type: types.TOGGLE_CALCULATOR_VIEW_OFF
    }
}

export const setCalculatorData = (cardInfo) => {
    return {
        type: types.SET_CALCULATOR_DATA,
        cardInfo: cardInfo
    }
}