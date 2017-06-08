import React from 'react'
import {shallow} from 'enzyme'
import configureStore from "redux-mock-store";
import * as types from '../../../../client/actions/types'

import TabContainer from '../../../../client/components/tabs/tab/tabContainer'
import TabPresenter from '../../../../client/components/tabs/tab/tabPresenter'

describe('<TabContainer/>', () => {
    const CURRENT_TAB_INDEX = 1
    const NOT_CURRENT_TAB_INDEX = 2;
    const initialState = {
        slidesReducer: {
            currentIndex: CURRENT_TAB_INDEX
        }
    }

    const store = configureStore()(initialState)

    TabPresenter.prototype['render'] = jest.fn()


    it('should display Tab presenter', () => {
        const renderedElement = shallow(<TabContainer store={store} index={CURRENT_TAB_INDEX}/>).shallow()
        expect(renderedElement.find('TabPresenter').exists()).toBeTruthy()
    })

    it('should pass isActive value true to the tab presenter with current tab', () => {
        const activeTabElement = shallow(<TabContainer store={store} index={CURRENT_TAB_INDEX}/>).shallow()
        expect(activeTabElement.find('TabPresenter').prop('isActive')).toBe(true)
    })

    it('should have isActive value false to the tab presenter that is not current tab', () => {
        const nonActiveTabElement = shallow(<TabContainer store={store} index={NOT_CURRENT_TAB_INDEX}/>).shallow()
        expect(nonActiveTabElement.find('TabPresenter').prop('isActive')).toBe(false)
    })

    it('should dispatch an action on set current index method call', () => {
        const renderedElement = shallow(<TabContainer store={store} index={CURRENT_TAB_INDEX}/>).shallow()
        renderedElement.instance().props.setCurrentIndex()
        expect(store.getActions()[0].type).toBe(types.SET_CURRENT_SLIDE_INDEX)
    })
})