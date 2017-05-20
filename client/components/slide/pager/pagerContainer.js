import React from 'react'
import { connect } from 'react-redux'
import { setCurrentSlideIndex } from '../../../actions/slideAction'

import {ViewPager, Frame, Track} from 'react-view-pager'
import CardUsagePage from './page/cardUsage'
import CardKeepView from './page/finishedCardCancel'
import NewCardView from './page/registerNewCard'

class Pager extends React.Component {
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
                        <CardUsagePage cardInfo={this.props.cardInfo} openCalculator={this.openCalculator}/>
                        <CardKeepView/>
                        <NewCardView/>
                    </Track>
                </Frame>
            </ViewPager>
        )
    }
}

const mapStatesToProps = (state) => {
    return {
        cardInfo: state.cardInfoReducer.cardInfo,
        slideCurrentIndex: state.slidesReducer.currentIndex
    }
}

const dispatchToPros = (dispatch) => {
    return {
        setCurrentIndex: (index) => dispatch(setCurrentSlideIndex(index))
    }
}

export default connect(mapStatesToProps, dispatchToPros)(Pager)