import React from 'react'
import {shallow} from 'enzyme'

import CardUsagePresenter from '../../../../../../client/components/slide/pager/page/cardUsage/cardUsagePresenter'

describe('<CardUsagePresenter/>', () => {
    const renderedElement = shallow(<CardUsagePresenter/>)

    it('should render date field, card list, and new card button', () => {
        expect(renderedElement.find('DateField').exists()).toBeTruthy()
        expect(renderedElement.childAt(1).type().displayName).toContain('CardList')
        expect(renderedElement.find('button').exists()).toBeTruthy()
    })
})