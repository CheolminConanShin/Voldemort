import React from 'react'
import LeftAmountField from '../../../../client/components/pager/history/leftAmountField'
import configureStore from 'redux-mock-store'
import {shallow} from "enzyme";

describe('<LeftAmountField/>', () => {
    const initState = {
        calculatorReducer: {
            cardInfo: {
                total: 100000,
                used: 14000
            }
        }
    }

    const store = configureStore()(initState)

    const leftAmountDate = "2017.07 (07.01 ~ 07.31)"
    const leftAmount = " 8만 6천원 부족"
    const renderedElement = shallow(<LeftAmountField store={store} date={leftAmountDate}/>).shallow()

    it('should display left amount with specific date', function () {
        expect(renderedElement.find("#date").text()).toEqual(leftAmountDate)
        expect(renderedElement.find("#amount").text()).toEqual(leftAmount)
    });
})