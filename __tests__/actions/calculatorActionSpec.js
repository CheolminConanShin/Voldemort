import * as actions from '../../client/actions/calculatorAction'
import * as types from '../../client/actions/types'

describe('Calculator action', () => {
    it('should return TOGGLE_CALCULATOR_VIEW_ON action on toggleCalculatorViewON action creator is called', () => {
        const expectedAction = {
            type: types.TOGGLE_CALCULATOR_VIEW_ON
        }

        expect(actions.toggleCalculatorViewON()).toEqual(expectedAction)
    })

    it('should return TOGGLE_CALCULATOR_VIEW_OFF action on toggleCalculatorViewOFF action creator is called', () => {
        const expectedAction = {
            type: types.TOGGLE_CALCULATOR_VIEW_OFF
        }

        expect(actions.toggleCalculatorViewOFF()).toEqual(expectedAction)
    })
})