import React from 'react'
import {mount} from 'enzyme'
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

import TabContainer from '../../../../client/components/tabs/tab/tabContainer'
import TabPresenter from '../../../../client/components/tabs/tab/tabPresenter'

describe('<TabContainer/>', () => {
    const UNNECESSARY_VALUE = 1
    const initialState = {
        slidesReducer: {
            currentIndex: 1
        }
    }

    const store = configureStore()(initialState)

    TabPresenter.prototype['render'] = jest.fn()


    it('should display Tab presenter', () => {
        const renderedElement = mount(<Provider store={store}><TabContainer index={UNNECESSARY_VALUE}/></Provider>)
        expect(renderedElement.find('TabPresenter').exists()).toBeTruthy()
    })

    it('should pass active class to the tab with current index', () => {
        let currentIndex = initialState.slidesReducer.currentIndex;
        const activeTabElement = mount(<Provider store={store}><TabContainer index={currentIndex}/></Provider>)
        expect(activeTabElement.find('TabPresenter').prop('classNames')).toContain('active')
    })

    it('should not pass active class to the tab that is not current index', () => {
        let notCurrentIndex = 2;
        const nonActiveTabElement = mount(<Provider store={store}><TabContainer index={notCurrentIndex}/></Provider>)
        expect(nonActiveTabElement.find('TabPresenter').prop('classNames')).not.toContain('active')
    })

    xit('should dispatch an action on set current index method call', () => {

    })
})