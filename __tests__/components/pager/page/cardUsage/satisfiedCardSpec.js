import React from 'react'
import {shallow} from 'enzyme'

import SatisfiedCard from '../../../../../client/components/pager/page/cardUsage/satisfiedCard'

describe('<SatisfiedCard/>', () => {

    const initialState = {
        name: "코난의 카드",
        depositDate: '02.26'
    }

    const renderedElement = shallow(<SatisfiedCard cardInfo={initialState}/>)
    it('should display card name', () => {
        const cardNameField = renderedElement.childAt(0)
        expect(cardNameField.text()).toEqual("코난의 카드")
    })

    it('should display satisfied string', () => {
        const satisfiedStringField = renderedElement.childAt(1)
        expect(satisfiedStringField.text()).toEqual("달성")
    })

    it('should display deposit date', () => {
        const depositeDate = renderedElement.childAt(3)
        expect(depositeDate.text()).toContain("02.26")
    })
})