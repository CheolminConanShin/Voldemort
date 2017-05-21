import React from 'react'
import {shallow} from 'enzyme'

import DateField from '../../../../../../client/components/slide/pager/page/cardUsage/dateField'

describe('<DateField/>', () => {
    const renderedElement = shallow(<DateField/>)

    it('should display todays year and month', () => {
        const currentYear = new Date().getFullYear()
        const currentMonth = new Date().getMonth()+1
        expect(renderedElement.find('Time').prop('value').toString()).toContain(currentYear)
        expect(renderedElement.find('Time').prop('value').toString()).toContain(currentMonth)
    })
})