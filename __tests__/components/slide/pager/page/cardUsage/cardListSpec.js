import React from 'react'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'
import configureStore from "redux-mock-store";

import CardList from '../../../../../../client/components/slide/pager/page/cardUsage/cardList'

describe('<CardList/> for card usage page', () => {
    const initialState = {
        cardInfoReducer: {
            cardInfo: {
                total: 'initial total',
                used: 'initial used'
            }
        }
    }
    const store = configureStore()(initialState)

    const renderedElement = mount(<Provider store={store}><CardList/></Provider>)

    it('should display some progress card and some satisfied card', () => {
        expect(renderedElement.find('ProgressCardContainer').exists()).toBeTruthy()
        expect(renderedElement.find('SatisfiedCard').exists()).toBeTruthy()
    })
})