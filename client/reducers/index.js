import * as types from '../actions/types'

export const sampleReducer = (state = {value: 'Hello World'}, action) => {
    switch (action.type) {
        case types.SAMPLE_ACTION:
            return {
                value: 'Hello World Conan'
            }
        default:
            return state;
    }
};
