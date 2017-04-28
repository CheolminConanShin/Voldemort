import React from "react";
import HelloWorldComponent from "../../../client/components/HelloWorld"
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store'
import * as types from "../../../client/actions/types"
import {mount} from 'enzyme'

describe('<HelloWorld/>', () => {
    let mockStore
    let connectedApp


    beforeEach(() => {
        mockStore = configureStore()()

        connectedApp = mount(<Provider store={mockStore}><HelloWorldComponent/></Provider>)

    })

    it('should fetch the sample action', () => {
        const oneExpectedAction = [{
            type: types.SAMPLE_ACTION
        }]

        const clickableDiv = connectedApp.find('div')
        clickableDiv.simulate('click')

        expect(mockStore.getActions()).toEqual(oneExpectedAction)
    })
})