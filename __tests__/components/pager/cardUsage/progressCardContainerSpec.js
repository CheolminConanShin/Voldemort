import React from 'react'
import {shallow} from 'enzyme'
import configureStore from 'redux-mock-store'
import * as types from '../../../../client/actions/types'

import ProgressCardContainer from '../../../../client/components/pager/cardUsage/progressCardContainer'

describe('<ProgressCardContainer/>', () => {
    const initialState = {
        cardInfo: {}
    }
    const store = configureStore()(initialState)

    const renderedElement = shallow(<ProgressCardContainer store={store} cardInfo={initialState.cardInfo}/>).shallow()
    const progressCard = renderedElement.instance()

    it('should return left amount string when leftAmountToString method is called', () => {
        const total = 100000;
        const used = 44500;
        expect(progressCard.leftAmountToString(total, used)).toEqual(" 5만 5천 5백원 부족")
    })

    it('should create set calculator data action on set calculator data method call', () => {
        const cardInfo = {
            total: '500000',
            used: '10000'
        }
        progressCard.props.setCalculatorData(cardInfo)
        expect(store.getActions()[0].type).toEqual(types.SET_CALCULATOR_DATA)
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
        renderedElement.props.setCalculatorData(cardInfo)
        expect(store.getActions()[0].cardInfo).toEqual(cardInfo)
    })
})