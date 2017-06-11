import React from 'react'
import { connect } from 'react-redux'
import { setCurrentSlideIndex } from '../../../actions/slideAction'

import {ViewPager, Frame, Track} from 'react-view-pager'
const mapStatesToProps = (state) => {
    return {
        slideCurrentIndex: state.slidesReducer.currentIndex
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
                <Frame className="frame">
                    <Track
                        ref={c => this.track = c}
                        viewsToShow={1}
                        currentView={this.props.slideCurrentIndex}
                        className="track"
                        onViewChange={currentIndex => {
                            this.props.setCurrentIndex(currentIndex[0])
                        }}>
                        {this.props.children}
                    </Track>
                </Frame>
            </ViewPager>
        )
    }
}