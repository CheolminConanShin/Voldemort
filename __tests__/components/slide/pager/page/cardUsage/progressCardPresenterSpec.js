import React from 'react'
import {shallow} from 'enzyme'
import ProgressCardPresenter from '../../../../../../client/components/slide/pager/page/cardUsage/progressCardPresenter'

describe('<ProgressCard/>', () => {
    const property = {
        cardName: '코난의 카드',
        leftAmountString: '5만원 부족'
    }

    const renderedElement = shallow(<ProgressCardPresenter {...property}/>)

    it('should display card name and left amount string', () => {
        let cardNameField = renderedElement.childAt(0);
        expect(cardNameField.text()).toEqual('코난의 카드')
        let leftAmountField = renderedElement.childAt(1);
        expect(leftAmountField.text()).toEqual("5만원 부족")
    })
})