import React from 'react'
import {shallow} from 'enzyme'

import UncancelableCard from '../../../../../../client/components/slide/pager/page/finishedCardCancel/uncancelableCard'

describe('<UncancelableCard/>', () => {

    const initialState = {
        cardName: "코난의 카드",
        dDay: '10',
        cancelableDate: '02.26'
    }

    const renderedElement = shallow(<UncancelableCard cardName={initialState.cardName} dDay={initialState.dDay} cancelableDate={initialState.cancelableDate}/>)
    it('should display card name', () => {
        const cardNameField = renderedElement.childAt(0)
        expect(cardNameField.text()).toEqual("코난의 카드")
    })

    it('should display days left until cancelable date', () => {
        const cardNameField = renderedElement.childAt(1)
        expect(cardNameField.text()).toEqual("10 일 남음")
    })

    it('should display cancelable date', () => {
        const cardNameField = renderedElement.childAt(2)
        expect(cardNameField.text()).toEqual("해지가능일 : 02.26")
    })
})