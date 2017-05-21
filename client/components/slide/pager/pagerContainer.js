import React from 'react'
import { connect } from 'react-redux'
import { setCurrentSlideIndex } from '../../../actions/slideAction'

import {ViewPager, Frame, Track} from 'react-view-pager'
import CardUsagePresenter from './page/cardUsage/cardUsagePresenter'
import FinishedCardCancelPresenter from './page/finishedCardCancel/finishedCardCancelPresenter'
import RegisterNewCardPresenter from './page/registerNewCard/registerNewCardPresenter'

class PagerContainer extends React.Component {
    render() {
        return (
            <ViewPager tag="main">
                <Frame className="frame">
                    <Track
                        ref={c => this.track = c}
                        viewsToShow={1}
                        currentView={this.props.slideCurrentIndex - 1}
                        className="track"
                        onViewChange={currentIndex => {
                            this.props.setCurrentIndex(currentIndex[0] + 1)
                        }}>
                        <CardUsagePresenter openCalculator={this.openCalculator}/>
                        <FinishedCardCancelPresenter/>
                        <RegisterNewCardPresenter/>
                    </Track>
                </Frame>
            </ViewPager>
        )
    }
}

const mapStatesToProps = (state) => {
    return {
        slideCurrentIndex: state.slidesReducer.currentIndex
    }
}

const dispatchToPros = (dispatch) => {
    return {
        setCurrentIndex: (index) => dispatch(setCurrentSlideIndex(index))
    }
}

export default connect(mapStatesToProps, dispatchToPros)(PagerContainer)