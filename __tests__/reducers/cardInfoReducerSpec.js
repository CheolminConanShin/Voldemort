import cardInfoReducer from '../../client/reducers/cardInfoReducer'
import * as types from '../../client/actions/types'

describe('Card Information Reducer', () => {
    it('should return the initial state when action type is unknown', () => {
        const initialState = {
            value: 'initial_value'
        }
        const unknownAction = {
            type: undefined
        }

        expect(cardInfoReducer(initialState, unknownAction)).toEqual(initialState)
    })

    it('should return new state with new card total and used value', () => {
        const initialState = {
            cardInfo: {
                total: 'original total',
                used: 'original used'
            }
        }
        const updateCardInfoAction = {
            type: types.UPDATE_CARD_INFO,
            cardInfo: {
                total: 'updated total',
                used: 'updated used'
            }
        }

        const expectedResult = {
            cardInfo: {
                total: 'updated total',
                used: 'updated used'
            }
        }
        expect(cardInfoReducer(initialState, updateCardInfoAction)).toEqual(expectedResult)
    })
})