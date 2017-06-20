import * as types from './types'

export const toggleCalculatorView = () => {
    return {
        type: types.TOGGLE_CALCULATOR_VIEW
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

export const setUsageValue = (value) => {
    return {
        type: types.SET_USAGE_VALUE,
        value: value
    }
}

export const updateUsedValue = (value) => {
    return {
        type: types.UPDATE_USED_VALUE,
        updateValue: value
    }
}