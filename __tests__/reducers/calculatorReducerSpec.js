import calculatorReducer from '../../client/reducers/calculatorReducer'
import * as types from '../../client/actions/types'

describe('Calculator Reducer', () => {
    it('should return false for initial state of calculator view toggle', () => {
        const expectedInitialState = {
            toggle: false
        }
        const unknownAction = {
            type: 'UNKNOWN_ACTION'
        }
        expect(calculatorReducer(undefined, unknownAction)).toEqual(expectedInitialState)
    })

    it('should return toggle state true on TOGGLE_CALCULATOR_VIEW action when calculator view was off', () => {
        const initialState = {
            toggle: false
        }

        const toggleCalculatorViewAction = {
            type: types.TOGGLE_CALCULATOR_VIEW
        }

        const expectedState = {
            toggle: true
        }
        expect(calculatorReducer(initialState, toggleCalculatorViewAction)).toEqual(expectedState)
    })
})