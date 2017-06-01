import React from 'react'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'
import configureStore from "redux-mock-store";

import CardList from '../../../../../../client/components/slide/pager/page/cardUsage/cardListContainer'

describe('<CardList/> for card usage page', () => {
    const initialState = {
        cardInfoReducer: {
            cardInfo: {
                firstCard: {
                    total: '30000',
                    used: '10000'
                },
                secondCard: {
                    total: '30000',
                    used: '30000'
                }
            }
        }
    }
    const store = configureStore()(initialState)

    const renderedElement = mount(<Provider store={store}><CardList/></Provider>)

    it('should display one progress card and one satisfied card', () => {
        expect(renderedElement.find('ProgressCardContainer').exists()).toBeTruthy()
        expect(renderedElement.find('SatisfiedCard').exists()).toBeTruthy()
    })
})