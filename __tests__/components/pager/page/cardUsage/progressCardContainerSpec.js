import React from 'react'
import {shallow} from 'enzyme'
import configureStore from 'redux-mock-store'
import * as types from '../../../../../client/actions/types'

import ProgressCardContainer from '../../../../../client/components/pager/page/cardUsage/progressCardContainer'

describe('<ProgressCardContainer/>', () => {
    const initialState = {
        cardInfo: {}
    }
    const store = configureStore()(initialState)

    const renderedElement = shallow(<ProgressCardContainer store={store} cardInfo={initialState.cardInfo}/>).shallow()
    const progressCard = renderedElement.instance()

    it('should return an object with 0 manwon, 5 cheonwon, and 0 baekwon fields when getLeftAmount method is called with total 10000 and used 5000', () => {
        const expectedResult = {
            leftManwon: 0,
            leftCheonwon: 5,
            leftBaekwon: 0
        }

        const total = "10000"
        const used = "5000"
        expect(progressCard.getLeftAmount(total, used)).toEqual(expectedResult)
    })

    it('should return left amount string when leftAmountToString method is called', () => {
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

    it('should set card data if toggleCalculatorON method is called', () => {
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