import React from "react";
import {shallow} from "enzyme";
import configureStore from "redux-mock-store";
import SlideContainer from "../../../client/components/slide/slideContainer";
import SlidePresenter from "../../../client/components/slide/slidePresenter";

describe('<SlideContainer/>', () => {

    const initialState = {}

    const store = configureStore()(initialState)
    SlidePresenter.prototype['render'] = jest.fn()

    const renderedElement = shallow(<SlideContainer store={store}/>).shallow()
    it('should render slide presenter', () => {
        expect(renderedElement.find('SlidePresenter').exists()).toBeTruthy()
    })
})