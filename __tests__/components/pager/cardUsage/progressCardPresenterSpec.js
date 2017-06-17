import React from 'react'
import {shallow} from 'enzyme'
import ProgressCardPresenter from '../../../../client/components/pager/cardUsage/progressCardPresenter'

describe('<ProgressCard/>', () => {
    const mockClickHandler = jest.fn()
    const property = {
        cardName: '코난의 카드',
        leftAmountString: '5만원 부족',
        setCalculatorData: mockClickHandler
    }

    const renderedElement = shallow(<ProgressCardPresenter {...property}/>)

    it('should display card name', () => {
        let cardNameField = renderedElement.childAt(0);
        expect(cardNameField.text()).toEqual('코난의 카드')
    })

    it('should display left amount as a string', () => {
        let leftAmountField = renderedElement.childAt(1);
        expect(leftAmountField.text()).toEqual("5만원 부족")
    })
})