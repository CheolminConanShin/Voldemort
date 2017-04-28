import * as actions from '../../client/actions'
import * as types from '../../client/actions/types'

describe('actions', () => {
    it('should create an sample action', () => {
        const expectedAction = () => {
            return {
                type: types.SAMPLE_ACTION
            }
        };
        expect(actions.sampleAction()).toEqual(expectedAction());
    });
});