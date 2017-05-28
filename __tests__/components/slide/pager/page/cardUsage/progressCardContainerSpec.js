import React from 'react'
import {shallow} from 'enzyme'
import configureStore from 'redux-mock-store'

import ProgressCardContainer from '../../../../../../client/components/slide/pager/page/cardUsage/progressCardContainer'

describe('<ProgressCardContainer/>', () => {
    const initialState = {
        cardInfoReducer: {
            cardInfo: {
                used: '50000',
                total: '100000'
            }
        }
    }
    const store = configureStore()(initialState)

    const renderedElement = shallow(<ProgressCardContainer store={store}/>).shallow()

    it('should return left amount object containing manwon, cheonwon, baekwon field on getLeftAmount method', () => {
        const progressCard = renderedElement.instance()
        const expectedResult = {
            leftManwon: 0,
            leftCheonwon: 5,
            leftBaekwon: 0
        }
        expect(progressCard.getLeftAmount("10000", "5000")).toEqual(expectedResult)
    })

    it('should return left amount string in form of xxxx원 부족 on leftAmountToString method', () => {
        const progressCard = renderedElement.instance()
        const leftAmount = {
            leftManwon: 5,
            leftCheonwon: 5,
            leftBaekwon: 5
        }
        expect(progressCard.leftAmountToString(leftAmount)).toEqual(" 5만 5천 5백원 부족")
    })

})