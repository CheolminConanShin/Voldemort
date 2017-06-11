import React from 'react'
import LeftAmountField from '../../../../client/components/pager/history/leftAmountField'
import {shallow} from "enzyme";

describe('<LeftAmountField/>', () => {

    const leftAmountDate = "2017.07 (07.01 ~ 07.31)"
    const leftAmount = "8만 6천원 부족"
    const renderedElement = shallow(<LeftAmountField date={leftAmountDate} amount={leftAmount}/>)

    it('should display left amount with specific date', function () {
        expect(renderedElement.find("#date").text()).toEqual(leftAmountDate)
        expect(renderedElement.find("#amount").text()).toEqual(leftAmount)
    });
})