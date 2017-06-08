import slidesReducer from '../../client/reducers/slidesReducer'
import * as types from '../../client/actions/types'

describe('Slides Reducer', () => {
    it('should have initial state with current index equal to 0', () => {
        const action = {
            type: "UNKNOWN_ACTION"
        }

        const expectedInitialState = {
            currentIndex: 0
        }

        expect(slidesReducer(undefined, action)).toEqual(expectedInitialState)
    })

    it('should change state with different slide index 2 on SET_CURRENT_SLIDE_INDEX action', () => {
        const action = {
            type: types.SET_CURRENT_SLIDE_INDEX,
            currentIndex: 2
        }

        const expectedState = {
            currentIndex: 2
        }

        expect(slidesReducer(undefined, action)).toEqual(expectedState)
    })
})