import React from "react";
import {shallow} from "enzyme";

import SlidePresenter from "../../../client/components/slide/slidePresenter";

describe('<SlidePresenter/>', () => {

    const renderedElement = shallow(<SlidePresenter/>)
    it('should display navigation bar with title 볼드모트 property', () => {
        const navigationBar = renderedElement.find('NavigationBar')
        expect(navigationBar.exists()).toBeTruthy()
        expect(navigationBar.prop('title')).toEqual('볼드모트')
    })
})