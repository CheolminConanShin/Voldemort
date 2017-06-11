import React from 'react'
import {shallow} from 'enzyme'

import NewCard from '../../../../../client/components/pager/page/registerNewCard/newCard'

describe('<NewCard/>', () => {
    it('should display card name', () => {
        const cardNameProperty = "코난의 카드"
        const renderedElement = shallow(<NewCard cardName={cardNameProperty}/>)
        const cardNameField = renderedElement.childAt(0)
        expect(cardNameField.text()).toEqual("코난의 카드")
    })

    it('should display pp image if card is pp card', () => {
        const renderedElement = shallow(<NewCard cardName={""} ppCard={true}/>)
        expect(renderedElement.find('img').exists()).toBeTruthy()
    })

    it('should not display pp image if card is not pp card', () => {
        const renderedElement = shallow(<NewCard cardName={""} ppCard={false}/>)
        expect(renderedElement.find('img').length).toBe(0)
    })

    it('should display annual fee of the card', () => {
        let annualFee = "20만";
        const renderedElement = shallow(<NewCard cardName={""} ppCard={false} annualFee={annualFee}/>)
        const annualFeeField = renderedElement.find('.annualFeeField')
        expect(annualFeeField.text()).toBe('20만')
    })

    it('should display voucher information', () => {
        let voucherInfo = "30만원 상품권";
        const renderedElement = shallow(<NewCard cardName={""} ppCard={false} annualFee={""} voucher={voucherInfo}/>)
        const voucherField = renderedElement.find('.voucherField')
        expect(voucherField.text()).toBe('30만원 상품권')
    })

    it('should display number of planners waiting', () => {
        let numberOfPlanner = 5;
        const renderedElement = shallow(<NewCard cardName={""} ppCard={false} annualFee={""} voucher={""} numberOfPlanner={numberOfPlanner}/>)
        const plannerField = renderedElement.find('.plannerField')
        expect(plannerField.text()).toContain('5명')
    })
})