import * as types from '../actions/types'

const initialState = {
    cardInfo: {
        total: '',
        used: ''
    }
}

export const cardInfoReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case(types.UPDATE_CARD_INFO):
            return Object.assign({}, state, {
                cardInfo: action.cardInfo
            })
        default:
            return {
                cardInfo: state
            }
    }
};
