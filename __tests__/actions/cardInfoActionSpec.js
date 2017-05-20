import * as actions from '../../client/actions/cardInfoAction'
import * as types from '../../client/actions/types'

describe('Card Information Actions', () => {
    it('should return an action with card information to be updated', () => {
        const expectedAction = {
            type: types.UPDATE_CARD_INFO,
            cardInfo: {
                total: 'new total amount',
                used: 'new used amount'
            }
        }

        const cardInfo = {
            total: 'new total amount',
            used: 'new used amount'
        }
        expect(actions.updateCardInfo(cardInfo)).toEqual(expectedAction);
    })
})