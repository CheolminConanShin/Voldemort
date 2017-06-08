import React from 'react'
import {shallow} from 'enzyme'
import configureStore from "redux-mock-store";

import SlidePresenter from "../../../client/components/slide/slidePresenter";
import PagerContainer from "../../../client/components/slide/pager/pagerContainer"

describe('<SlidePresenter/>', () => {

    const renderedElement = shallow(<SlidePresenter/>)

    const initialState = {
        slidesReducer: {
            currentIndex: 0
        }
    }
    const mockStore = configureStore()(initialState)

    it('should display navigation bar with title 볼드모트 property', () => {
        const navigationBar = renderedElement.find('NavigationBar')
        expect(navigationBar.exists()).toBeTruthy()
        expect(navigationBar.prop('title')).toEqual('볼드모트')
    })

    it('should display tabs and pager', () => {
        expect(renderedElement.find('TabsPresenterForSlider').exists()).toBeTruthy()
        const pagerContainer = renderedElement.childAt(1).childAt(0).getNode();
        expect(pagerContainer.type.displayName).toContain('Pager')
    })
})