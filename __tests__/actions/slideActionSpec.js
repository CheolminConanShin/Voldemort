import * as actions from '../../client/actions/slideAction'
import * as types from '../../client/actions/types'

describe('Slide View Pager Actions', () => {
    it('should return an action with slide index to be set on setCurrentSlideIndex action creator is called', () => {
        const expectedAction = {
            type: types.SET_CURRENT_SLIDE_INDEX,
            currentIndex: 2
        }

        expect(actions.setCurrentSlideIndex(2)).toEqual(expectedAction)
    })
})