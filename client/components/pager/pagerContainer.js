import React from 'react'
import { connect } from 'react-redux'
import { setCurrentSlideIndex } from '../../actions/slideAction'

import {ViewPager, Frame, Track} from 'react-view-pager'
const mapStatesToProps = (state) => {
    return {
        slideCurrentIndex: state.slidesReducer.currentIndex,
        calculatorOn: state.calculatorReducer.toggle
    }
}

const dispatchToProps = (dispatch) => {
    return {
        setCurrentIndex: (index) => dispatch(setCurrentSlideIndex(index))
    }
}

@connect(mapStatesToProps, dispatchToProps)
export default class PagerContainer extends React.Component {
    render() {
        return (
            <ViewPager tag="main">
                <Frame
                    autoSize={true}
                    className={this.props.calculatorOn ? 'half-track' : this.props.trackName}>
                    <Track
                        className={this.props.calculatorOn ? 'half-track' : this.props.trackName}
                        ref={c => this.track = c}
                        viewsToShow={1}
                        currentView={this.props.slideCurrentIndex}
                        onViewChange={(newIndex) => this.viewChangeHandler(newIndex[0])}>
                        {this.props.children}
                    </Track>
                </Frame>
            </ViewPager>
        )
    }

    viewChangeHandler(index){
        this.props.setCurrentIndex(index)
    }
}