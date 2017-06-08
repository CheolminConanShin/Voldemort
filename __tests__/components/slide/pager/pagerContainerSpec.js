import React from "react";
import {mount} from "enzyme";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

import * as types from '../../../../client/actions/types'
import PagerContainer from "../../../../client/components/slide/pager/pagerContainer";
import CardUsagePresenter from '../../../../client/components/slide/pager/page/cardUsage/cardUsagePresenter'
import {ViewPager} from 'react-view-pager'

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
    ViewPager.prototype['componentDidMount'] = jest.fn()
    CardUsagePresenter.prototype['render'] = jest.fn()
    const renderedElement = mount(<Provider store={store}><PagerContainer/></Provider>)

    it('should display view pager components including ViewPager, Frame, and Track', () => {
        expect(renderedElement.find('ViewPager').exists()).toBeTruthy()
        expect(renderedElement.find('Frame').exists()).toBeTruthy()
        expect(renderedElement.find('Track').exists()).toBeTruthy()
    })

    it('should display tracks with 3 different pages(card usage, finished card cancel, new card)', () => {
        const track = renderedElement.find('Track')
        expect(track.childAt(0).type().name).toEqual('CardUsagePresenter')
        expect(track.childAt(1).type().name).toEqual('FinishedCardCancelPresenter')
        expect(track.childAt(2).type().name).toEqual('RegisterNewCardPresenter')
    })

    it('should display view with current index', () => {
        expect(renderedElement.find('Track').prop('currentView')).toEqual(CURRENT_INDEX)
    })

    it('should call set current index property function on view change', () => {
        renderedElement.find('Track').getNode().scrollTo(1)

        expect(store.getActions()[0].type).toEqual(types.SET_CURRENT_SLIDE_INDEX)
    })
})