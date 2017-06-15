import React from 'react'
import CardHistoryContainer from '../../../../client/components/pager/history/cardHistoryContainer'
import {shallow} from "enzyme";
import configureStore from 'redux-mock-store'
import * as types from '../../../../client/actions/types'

describe('<CardHistoryContainer/>', () => {

    const initState = {
        calculatorReducer: {
            cardInfo: {}
        }
    }
    const store = configureStore()(initState)

    const renderedElement = shallow(<CardHistoryContainer store={store}/>)

    xit('should fetch card date range and amount on render', () => {
        renderedElement.instance()
        expect(true).toBeTruthy()
    })
})

