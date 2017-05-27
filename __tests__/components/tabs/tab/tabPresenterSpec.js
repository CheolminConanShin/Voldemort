import React from 'react'
import {shallow} from 'enzyme'

import TabPresenter from '../../../../client/components/tabs/tab/tabPresenter'

describe('<TabPresenter/>', () => {
    const renderedElement = shallow(<TabPresenter text={"tab text"}/>)

    it('should display tab text', () => {
        expect(renderedElement.text()).toBe('tab text')
    })
})