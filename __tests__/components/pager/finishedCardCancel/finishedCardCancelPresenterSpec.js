import React from 'react'
import {shallow} from 'enzyme'

import FinishedCardCancelPresenter from '../../../../client/components/pager/finishedCardCancel/finishedCardCancelPresenter'

describe('<FinishedCardCancelPresenter/>', () => {
    const renderedElement = shallow(<FinishedCardCancelPresenter/>)

    it('should render card list', () => {
        expect(renderedElement.find('CardList').exists()).toBeTruthy()
    })
})