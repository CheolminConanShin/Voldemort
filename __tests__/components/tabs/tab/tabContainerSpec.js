import React from 'react'
import {shallow} from 'enzyme'
import configureStore from "redux-mock-store";
import * as types from '../../../../client/actions/types'

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
        const renderedElement = shallow(<TabContainer store={store} index={UNNECESSARY_VALUE}/>).shallow()
        expect(renderedElement.find('TabPresenter').exists()).toBeTruthy()
    })

    it('should pass active class to the tab with current index', () => {
        let currentIndex = initialState.slidesReducer.currentIndex;
        const activeTabElement = shallow(<TabContainer store={store} index={currentIndex}/>).shallow()
        expect(activeTabElement.find('TabPresenter').prop('classNames')).toContain('active')
    })

    it('should have inactive class to the tab that is not current index', () => {
        let notCurrentIndex = 2;
        const nonActiveTabElement = shallow(<TabContainer store={store} index={notCurrentIndex}/>).shallow()
        expect(nonActiveTabElement.find('TabPresenter').prop('classNames')).toContain('inactive')
    })

    it('should dispatch an action on set current index method call', () => {
        const renderedElement = shallow(<TabContainer store={store} index={UNNECESSARY_VALUE}/>).shallow()
        renderedElement.instance().props.setCurrentIndex()
        expect(store.getActions()[0].type).toBe(types.SET_CURRENT_SLIDE_INDEX)
    })
})