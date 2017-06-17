import React from 'react'
import {shallow} from 'enzyme'
import configureStore from 'redux-mock-store'
import UsageButton from '../../../../client/components/pager/cardUsage/addUsageButton'
import * as types from '../../../../client/actions/types'

describe('<UsageButton/>', () => {
    const setCalculatorData = jest.fn()
    const property = {
        setCalculatorData: setCalculatorData
    }

    const initialState = {}
    const store = configureStore()(initialState)
    let renderedElement

    beforeEach(function () {
        store.clearActions()
        renderedElement = shallow(<UsageButton store={store} {...property}/>).shallow()
    });


    it('should call set calculator data method on click button', () => {
        renderedElement.simulate('click')
        expect(setCalculatorData).toHaveBeenCalled()
    })

    it('should create toggle calculator view on action on click', () => {
        renderedElement.simulate('click')
        expect(store.getActions()[0].type).toEqual(types.TOGGLE_CALCULATOR_VIEW_ON)
    })
})