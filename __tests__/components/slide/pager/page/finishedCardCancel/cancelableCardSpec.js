import React from 'react'
import {shallow} from 'enzyme'

import CancelableCard from '../../../../../../client/components/slide/pager/page/finishedCardCancel/cancelableCard'

describe('<CancelableCard/>', () => {

    const initialState = {
        cardName: "코난의 카드",
    }

    const renderedElement = shallow(<CancelableCard cardName={initialState.cardName}/>)
    it('should display card name', () => {
        const cardNameField = renderedElement.childAt(0)
        expect(cardNameField.text()).toEqual("코난의 카드")
    })
})