import React from 'react'
import {shallow} from 'enzyme'

import Header from '../../../client/components/navigationBar/headerPresenter'

describe('<Header/>', () => {

    const renderElement = shallow(<Header title="test title"/>)

    it('should display title provided from property', () => {
        expect(renderElement.find('#header-title').text()).toEqual('test title')
    })
})