import * as types from '../../client/actions/types'
import * as reducers from '../../client/reducers'

describe('reducer', () => {
    describe('sample', () => {
        it('should return the initial state when action type is unknown', () => {
            const initialState = {
                value: 'initial_value'
            }
            const unknownAction = {
                type: undefined
            }

            expect(reducers.sampleReducer(initialState, unknownAction)).toEqual(initialState)
        })

        it('should return the state with new value on sample action', () => {
            const initialState = {
                value: 'initial_value'
            }
            const sampleAction = {
                type: types.SAMPLE_ACTION
            }
            const expectedState = {
                value: 'Hello World Conan'
            }

            expect(reducers.sampleReducer(initialState, sampleAction)).toEqual(expectedState)
        })
    })
})