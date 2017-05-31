import calculatorReducer from '../../client/reducers/calculatorReducer'
import * as types from '../../client/actions/types'

describe('Calculator Reducer', () => {
    it('should return false for initial state of calculator view toggle', () => {
        const expectedInitialState = {
            toggle: false,
            cardInfo: {
                total: '',
                used: ''
            },
            currentValue: 0
        }
        const unknownAction = {
            type: 'UNKNOWN_ACTION'
        }
        expect(calculatorReducer(undefined, unknownAction)).toEqual(expectedInitialState)
    })

    it('should return toggle state true on TOGGLE_CALCULATOR_VIEW_ON action', () => {
        const initialState = {
            toggle: false
        }

        const toggleCalculatorViewAction = {
            type: types.TOGGLE_CALCULATOR_VIEW_ON
        }

        const expectedState = {
            toggle: true
        }
        expect(calculatorReducer(initialState, toggleCalculatorViewAction)).toEqual(expectedState)
    })

    it('should return toggle state false on TOGGLE_CALCULATOR_VIEW_OFF action', () => {
        const initialState = {
            toggle: true
        }

        const toggleCalculatorViewAction = {
            type: types.TOGGLE_CALCULATOR_VIEW_OFF
        }

        const expectedState = {
            toggle: false
        }
        expect(calculatorReducer(initialState, toggleCalculatorViewAction)).toEqual(expectedState)
    })
})