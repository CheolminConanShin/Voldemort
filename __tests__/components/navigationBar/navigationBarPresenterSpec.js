import React from 'react'
import {shallow} from 'enzyme'

import NavigationBar from '../../../client/components/navigationBar/navigationBarPresenter'

describe('<NavigationBar/>', () => {
    it('should render back arrow button if it has arrow property', () => {
        const renderElement = shallow(<NavigationBar title="test title" arrow={true}/>)
        expect(renderElement.find('Connect(ArrowBack)').exists()).toBeTruthy()
    })

    it('should not render back arrow button if it does not have arrow property', () => {
        const renderElement = shallow(<NavigationBar title="test title" arrow={false}/>)
        expect(renderElement.find('Connect(ArrowBack)').exists()).toBeFalsy()
    })

    it('should pass title text to header component', () => {
        const renderElement = shallow(<NavigationBar title="test title"/>)
        expect(renderElement.find('Header').prop('title')).toEqual('test title')
    })

    it('should render pencil button if it has pencil property', () => {
        const renderElement = shallow(<NavigationBar title="test title" pencil={true}/>)
        expect(renderElement.find('ArrowBack').exists()).toBeTruthy()
    })

    it('should not render pencil button if it does not have pencil property', () => {
        const renderElement = shallow(<NavigationBar title="test title" pencil={false}/>)
        expect(renderElement.find('Pencil').exists()).toBeFalsy()
    })
})