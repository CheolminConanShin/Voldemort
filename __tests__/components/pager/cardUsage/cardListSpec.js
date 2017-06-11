import React from 'react'
import {shallow} from 'enzyme'
import configureStore from "redux-mock-store";

import CardList from '../../../../client/components/pager/cardUsage/cardListContainer'

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

    const renderedElement = shallow(<CardList store={store}/>).shallow()

    it('should display one progress card and one satisfied card', () => {
        const firstCardDivTag = renderedElement.childAt(0).node
        expect(firstCardDivTag.type.displayName).toContain('ProgressCardContainer')
        const secondCardDivTag = renderedElement.childAt(1).node
        expect(secondCardDivTag.type.name).toContain('SatisfiedCard')
    })
})