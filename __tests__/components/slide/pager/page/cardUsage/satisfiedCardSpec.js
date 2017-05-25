import React from 'react'
import {shallow} from 'enzyme'

import SatisfiedCard from '../../../../../../client/components/slide/pager/page/cardUsage/satisfiedCard'

describe('<SatisfiedCard/>', () => {

    const initialState = {
        cardName: "코난의 카드",
        depositDate: '02.26'
    }

    const renderedElement = shallow('<SatisfiedCard cardName={initialState.cardName} depositDate={initialState.depositDate}/>')
    it('should display card name and satisfied string and deposit date', () => {
        const cardNameField = renderedElement.childAt(0)
        const satisfiedString = renderedElement.childAt(1)
        const depositeDate = renderedElement.childAt(2)
        expect(cardNameField.text()).toEqual("코난의 카드")
    })
})