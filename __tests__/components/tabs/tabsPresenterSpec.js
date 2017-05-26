import React from 'react'
import {shallow} from 'enzyme'

import TabsPresenter from '../../../client/components/tabs/tabsPresenter'

describe('<TabsPresenter/>', () => {
    const renderedElement = shallow(<TabsPresenter/>)

    it('should have 3 tabs and 1 underline as rendering component', () => {
        expect(renderedElement.children().length).toBe(4)
    })
})