import React from 'react'
import {shallow} from 'enzyme'

import DateField from '../../../../client/components/pager/cardUsage/dateField'

describe('<DateField/>', () => {
    const renderedElement = shallow(<DateField/>)

    it('should display today year and month', () => {
        const currentYear = new Date().getFullYear()
        const currentMonth = new Date().getMonth()+1
        expect(renderedElement.find('Time').prop('value').getFullYear()).toBe(currentYear)
        expect(renderedElement.find('Time').prop('value').getMonth()+1).toBe(currentMonth)
    })
})