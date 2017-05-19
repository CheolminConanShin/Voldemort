import React from 'react'
import {ViewPager, Frame, Track} from 'react-view-pager'

import NavigationBar from '../navigationbar/navigationbar'
import Tabs from '../tabs/tabs'
import CardUsageView from '../../components/Views/Slides/CardUsageView'
import CardKeepView from '../../components/Views/Slides/CardKeepView'
import NewCardView from '../../components/Views/Slides/NewCardView'

import { connect } from 'react-redux'

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
                            currentView={this.state.currentIndex}
                            className="track"
                            onViewChange={currentIndicies => {
                                this.setState({ currentIndex: currentIndicies[0] })
                            }}>
                            <CardUsageView cardInfo={this.state.cardInfo} openCalculator={this.openCalculator}/>
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

export default connect(mapStatesToProps)(DumbSlides)