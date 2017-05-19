import React from 'react'
import { setCurrentSlideIndex } from '../../actions/slideAction'
import { connect } from 'react-redux'

import {ViewPager, Frame, Track} from 'react-view-pager'
import NavigationBar from '../navigationbar/navigationbar'
import Tabs from '../tabs/tabs'
import CardUsageView from '../../components/Views/Slides/CardUsageView'
import CardKeepView from '../../components/Views/Slides/CardKeepView'
import NewCardView from '../../components/Views/Slides/NewCardView'


class DumbSlides extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar title="볼드모트"/>
                <Tabs currentIndex={this.props.slideCurrentIndex}/>
                <ViewPager tag="main">
                    <Frame className="frame">
                        <Track
                            ref={c => this.track = c}
                            viewsToShow={1}
                            currentView={this.props.slideCurrentIndex-1}
                            className="track"
                            onViewChange={currentIndicies => {
                                this.props.setCurrentIndex(currentIndicies[0]+1)
                            }}>
                            <CardUsageView cardInfo={this.props.cardInfo} openCalculator={this.openCalculator}/>
                            <CardKeepView/>
                            <NewCardView/>
                        </Track>
                    </Frame>
                </ViewPager>
            </div>
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

export default connect(mapStatesToProps, dispatchToPros)(DumbSlides)