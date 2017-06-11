import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";

import * as types from "../../../client/actions/types";
import PagerContainer from "../../../client/components/pager/pagerContainer";
import {ViewPager} from "react-view-pager";

describe('<PagerContainer', () => {

    const CURRENT_INDEX = 1;
    const initialState = {
        slidesReducer: {
            currentIndex: CURRENT_INDEX
        },
        cardInfoReducer: {
            cardInfo: {
                total: '100000',
                used: '50000'
            }
        }
    }

    const store = configureStore()(initialState)
    const renderedElement = shallow(<PagerContainer store={store}/>).shallow()

    it('should display view pager components including ViewPager, Frame, and Track', () => {
        expect(renderedElement.find('ViewPager').exists()).toBeTruthy()
        expect(renderedElement.find('Frame').exists()).toBeTruthy()
        expect(renderedElement.find('Track').exists()).toBeTruthy()
    })

    it('should display view with current index', () => {
        expect(renderedElement.find('Track').prop('currentView')).toEqual(CURRENT_INDEX)
    })

    it('should call set current index property function on view change', () => {
        renderedElement.instance().viewChangeHandler(1)
        expect(store.getActions()[0].type).toEqual(types.SET_CURRENT_SLIDE_INDEX)
    })
})