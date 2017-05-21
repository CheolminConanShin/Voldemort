import React from 'react'
import {shallow} from 'enzyme'

import NavigationBar from '../../../client/components/navigationBar/navigationBarPresenter'

describe('<NavigationBar/>', () => {
    it('should pass title property to its child header', () => {
        const renderElement = shallow(<NavigationBar title="test title"/>)
        expect(renderElement.find('Header').prop('title')).toEqual('test title')
    })

    it('should render back arrow button if it has arrow property', () => {
        const renderElement = shallow(<NavigationBar title="test title" arrow="back"/>)
        expect(renderElement.find('ArrowBack').exists()).toBeTruthy()
    })

    it('should render left drawer hamburger button if it does not have arrow property', () => {
        const renderElement = shallow(<NavigationBar title="test title"/>)
        expect(renderElement.find('LeftDrawer').exists()).toBeTruthy()
    })
})