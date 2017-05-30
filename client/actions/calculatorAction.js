import * as types from './types'

export const toggleCalculatorViewON = (cardInfo) => {
    return {
        type: types.TOGGLE_CALCULATOR_VIEW_ON,
        cardInfo: cardInfo
    }
}

export const toggleCalculatorViewOFF = () => {
    return {
        type: types.TOGGLE_CALCULATOR_VIEW_OFF
    }
}