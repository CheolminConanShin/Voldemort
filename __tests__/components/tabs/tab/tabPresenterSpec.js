import React from 'react'
import {shallow} from 'enzyme'

import TabPresenter from '../../../../client/components/tabs/tab/tabPresenter'

describe('<TabPresenter/>', () => {
    const clickEventHandler = jest.fn()

    const renderedElement = shallow(<TabPresenter text={"tab text"} changeIndex={clickEventHandler}/>)

    it('should display text property', () => {
        expect(renderedElement.text()).toBe('tab text')
    })

    it('should call changeIndex event handler on clicking tab', () => {
        renderedElement.simulate('click')

        expect(clickEventHandler).toHaveBeenCalled()
    })
})