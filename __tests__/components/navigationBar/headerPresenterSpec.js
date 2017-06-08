import React from 'react'
import {shallow} from 'enzyme'

import Header from '../../../client/components/navigationBar/headerPresenter'

describe('<Header/>', () => {
    const text= "test title"
    const renderElement = shallow(<Header title={text}/>)

    it('should display text passed as property', () => {
        expect(renderElement.text()).toEqual(text)
    })
})