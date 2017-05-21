import React from "react";
import {mount} from "enzyme";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import SlideContainer from "../../../client/components/slide/slideContainer";
import SlidePresenter from "../../../client/components/slide/slidePresenter";

describe('<SlideContainer/>', () => {

    const initialState = {
        slidesReducer: {
            currentIndex: 1
        },
        cardInfoReducer: {
            cardInfo: {
                total: '100000',
                used: '50000'
            }
        }
    }

    const store = configureStore()(initialState)
    SlidePresenter.prototype['render'] = jest.fn()
    const renderedElement = mount(<Provider store={store}><SlideContainer/></Provider>)
    it('should render slide presenter', () => {
        expect(renderedElement.find('SlidePresenter').exists()).toBeTruthy()
    })
})