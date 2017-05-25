import React from 'react'
import {shallow} from 'enzyme'

import ProgressCard from '../../../../../../client/components/slide/pager/page/cardUsage/progressCard'

describe('<ProgressCard/>', () => {
    const initialCardInfo = {
        used: '50000',
        total: '100000'
    }

    const initialProperty = {
        cardName: '코난의 카드',
        openCalculator: jest.fn()
    }

    const renderedElement = shallow(<ProgressCard cardName={initialProperty.cardName} cardInfo={initialCardInfo} openCalculator={initialProperty.openCalculator}/>)

    it('should display card name and left amount string', () => {
        let cardNameField = renderedElement.childAt(0).text();
        expect(cardNameField).toEqual('코난의 카드')
        let leftAmountField = renderedElement.childAt(1);
        expect(leftAmountField.text()).toEqual(" 5만원 부족")
    })
})