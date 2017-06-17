import * as actions from '../../client/actions/calculatorAction'
import * as types from '../../client/actions/types'

describe('Calculator action', () => {
    it('should return TOGGLE_CALCULATOR_VIEW action on toggleCalculatorView action creator is called', () => {
        const expectedAction = {
            type: types.TOGGLE_CALCULATOR_VIEW
        }

        expect(actions.toggleCalculatorView()).toEqual(expectedAction)
    })
})