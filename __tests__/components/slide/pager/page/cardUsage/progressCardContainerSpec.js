import React from 'react'
import {shallow} from 'enzyme'
import configureStore from 'redux-mock-store'
import * as types from '../../../../../../client/actions/types'

import ProgressCardContainer from '../../../../../../client/components/slide/pager/page/cardUsage/progressCardContainer'

describe('<ProgressCardContainer/>', () => {
    const initialState = {
        cardInfoReducer: {
            cardInfo: {}
        }
    }
    const store = configureStore()(initialState)

    const renderedElement = shallow(<ProgressCardContainer store={store}/>).shallow()
    const progressCard = renderedElement.instance()

    it('should return left amount object containing manwon, cheonwon, baekwon field on getLeftAmount method', () => {
        const expectedResult = {
            leftManwon: 0,
            leftCheonwon: 5,
            leftBaekwon: 0
        }
        expect(progressCard.getLeftAmount("10000", "5000")).toEqual(expectedResult)
    })

    it('should return left amount string in form of xxxx원 부족 on leftAmountToString method', () => {
        const leftAmount = {
            leftManwon: 5,
            leftCheonwon: 5,
            leftBaekwon: 5
        }
        expect(progressCard.leftAmountToString(leftAmount)).toEqual(" 5만 5천 5백원 부족")
    })

    it('should create calculator toggle action on toggle calculator method call', () => {
        progressCard.props.toggleCalculator()
        expect(store.getActions()[0].type).toEqual(types.TOGGLE_CALCULATOR_VIEW)
    })

    it('should create calculator card data set action if toggle calculator method call is changing toggle value false => true', () => {
        const initialState = {
            cardInfoReducer: {
                cardInfo: {}
            },
            calculatorReducer: {
                toggle: false
            }
        }
        const store = configureStore()(initialState)

        const renderedElement = shallow(<ProgressCardContainer store={store}/>).shallow().instance()
        renderedElement.props.toggleCalculator()
        expect(store.getActions()[0].type).toEqual(types.CALCULATOR_CARD_DATA_SET)
    })
})