import * as actions from '../../client/actions/calculatorAction'
import * as types from '../../client/actions/types'

describe('Calculator action', () => {
    it('should return TOGGLE_CALCULATOR_VIEW_ON action and cardInfo to be displayed in calculator on toggleCalculatorViewON action creator is called', () => {
        const expectedAction = {
            type: types.TOGGLE_CALCULATOR_VIEW_ON,
            cardInfo: {
                total: '1000',
                used: '500'
            }
        }
        const cardInfo = {
            total: '1000',
            used: '500'
        }

        expect(actions.toggleCalculatorViewON(cardInfo)).toEqual(expectedAction)
    })

    it('should return TOGGLE_CALCULATOR_VIEW_OFF action on toggleCalculatorViewOFF action creator is called', () => {
        const expectedAction = {
            type: types.TOGGLE_CALCULATOR_VIEW_OFF
        }

        expect(actions.toggleCalculatorViewOFF()).toEqual(expectedAction)
    })
})