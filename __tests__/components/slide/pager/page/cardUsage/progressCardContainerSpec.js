import React from 'react'
import {shallow} from 'enzyme'
import configureStore from 'redux-mock-store'
import * as types from '../../../../../../client/actions/types'

import ProgressCardContainer from '../../../../../../client/components/slide/pager/page/cardUsage/progressCardContainer'

describe('<ProgressCardContainer/>', () => {
    const initialState = {
        cardInfo: {}
    }
    const store = configureStore()(initialState)

    const renderedElement = shallow(<ProgressCardContainer store={store} cardInfo={initialState.cardInfo}/>).shallow()
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
        const cardInfo = {
            total: '500000',
            used: '10000'
        }
        progressCard.props.toggleCalculatorViewON(cardInfo)
        expect(store.getActions()[0].type).toEqual(types.TOGGLE_CALCULATOR_VIEW_ON)
    })

    it('should set card data if toggle calculator on method is called', () => {
        const initialState = {
            cardInfoReducer: {
                cardInfo: {}
            },
            calculatorReducer: {
                toggle: false
            }
        }
        const store = configureStore()(initialState)

        const renderedElement = shallow(<ProgressCardContainer store={store} cardInfo={initialState.cardInfoReducer.cardInfo}/>).shallow().instance()
        const cardInfo = {
            total: '500000',
            used: '10000'
        }
        renderedElement.props.toggleCalculatorViewON(cardInfo)
        expect(store.getActions()[0].cardInfo).toEqual(cardInfo)
    })
})