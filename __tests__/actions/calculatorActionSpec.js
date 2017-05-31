import * as actions from '../../client/actions/calculatorAction'
import * as types from '../../client/actions/types'

describe('Calculator action', () => {
    it('should return calculator toggle action on toggleCalculatorView method call', () => {
        const expectedAction = {
            type: types.TOGGLE_CALCULATOR_VIEW_ON,
            cardInfo: {}
        }
        const cardInfo = {}

        expect(actions.toggleCalculatorViewON(cardInfo)).toEqual(expectedAction)
    })
})