import * as types from '../actions/types'

const initialState = {
    cardInfo: {
        total: '',
        used: ''
    }
}

export const cardInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case(types.UPDATE_CARD_INFO):
            return Object.assign({}, state, {
                cardInfo: action.cardInfo
            })
        default:
            return state
    }
};
