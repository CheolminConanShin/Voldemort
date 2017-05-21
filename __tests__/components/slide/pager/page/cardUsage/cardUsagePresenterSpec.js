import React from 'react'
import {shallow} from 'enzyme'

import CardUsagePresenter from '../../../../../../client/components/slide/pager/page/cardUsage/cardUsagePresenter'

describe('<CardUsagePresenter/>', () => {
    const renderedElement = shallow(<CardUsagePresenter/>)

    it('should display date, card list, and add new card button', () => {
        expect(renderedElement.find('DateField').exists()).toBeTruthy()
        expect(renderedElement.childAt(1).type().displayName).toContain('CardList')
        expect(renderedElement.find('button').exists()).toBeTruthy()
    })
})