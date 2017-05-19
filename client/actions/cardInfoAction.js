import * as types from './types'

export function updateCardInfo(cardInfo) {
    return {
        type: types.UPDATE_CARD_INFO,
        cardInfo: cardInfo
    }
}