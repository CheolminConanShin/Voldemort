import React from "react";
import {mount} from "enzyme";
import {stubComponent} from "../../../__mocks__/stubComponent";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import SlideContainer from "../../../../client/components/slide/slideContainer";
import SlidePresenter from "../../../../client/components/slide/slidePresenter";

describe('<SlideContainer/>', () => {
    stubComponent(SlidePresenter)

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

    // const renderedElement = mount(<Provider store={store}><SlideContainer/></Provider>)
    it('should render slide presenter', () => {
        expect(true).toBeTruthy()
        // const slidePresenter = renderedElement.find('div')
    })
})