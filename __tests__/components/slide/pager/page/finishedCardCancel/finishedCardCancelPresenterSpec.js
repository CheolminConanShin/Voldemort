import React from 'react'
import {shallow} from 'enzyme'

import FinishedCardCancelPresenter from '../../../../../../client/components/slide/pager/page/finishedCardCancel/finishedCardCancelPresenter'

describe('<FinishedCardCancelPresenter/>', () => {
    const renderedElement = shallow(<FinishedCardCancelPresenter/>)

    it('should display card list', () => {
        expect(renderedElement.find('CardList').exists()).toBeTruthy()
    })
})