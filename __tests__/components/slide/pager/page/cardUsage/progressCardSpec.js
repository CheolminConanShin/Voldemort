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

    it('should return left amount object containing manwon, cheonwon, baekwon field on getLeftAmount method', () => {
        const progressCard = renderedElement.instance()
        const expectedResult = {
            leftManwon: 0,
            leftCheonwon: 5,
            leftBaekwon:0
        }
        expect(progressCard.getLeftAmount("10000", "5000")).toEqual(expectedResult)
    })

    it('should return left amount string in form of xxxx원 부족 on leftAmountToString method', () => {
        const progressCard = renderedElement.instance()
        const leftAmount = {
            leftManwon: 5,
            leftCheonwon: 5,
            leftBaekwon: 5
        }
        expect(progressCard.leftAmountToString(leftAmount)).toEqual(" 5만 5천 5백원 부족")
    })

    it('should display card name and left amount string', () => {
        let cardNameField = renderedElement.childAt(0);
        expect(cardNameField.text()).toEqual('코난의 카드')
        let leftAmountField = renderedElement.childAt(1);
        expect(leftAmountField.text()).toEqual(" 5만원 부족")
    })
})