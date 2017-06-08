import React from "react";
import {setCurrentSlideIndex} from "../../../actions/slideAction";
import {connect} from "react-redux";

import TabPresenter from "./tabPresenter";

const mapStateToProps = (state) => {
    return {
        isTabActive: (tabIndex) => state.slidesReducer.currentIndex == tabIndex
    }
}

const dispatchToProps = (dispatch) => {
    return {
        setCurrentIndex: (index) => dispatch(setCurrentSlideIndex(index))
    }
}

@connect(mapStateToProps, dispatchToProps)
export default class TabContainer extends React.Component {
    constructor(props) {
        super(props)

        this.setCurrentIndexHandler = this.setCurrentIndexHandler.bind(this)
    }

    render() {
        const isActive = this.props.isTabActive(this.props.index)
        return (
            <TabPresenter isActive={isActive} {...this.props} changeIndex={this.setCurrentIndexHandler}/>
        )
    }

    setCurrentIndexHandler() {
        this.props.setCurrentIndex(this.props.index)
    }
}