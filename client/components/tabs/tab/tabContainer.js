import React from "react";
import {setCurrentSlideIndex} from "../../../actions/slideAction";
import {connect} from "react-redux";

import TabPresenter from "./tabPresenter";

const mapStateToProps = (state) => {
    return {
        currentIndex: state.slidesReducer.currentIndex
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
        const activeTabClass = this.props.index == this.props.currentIndex ? "active" : "inactive"
        const classNames = "tab" + this.props.index + " " + activeTabClass
        return (
            <TabPresenter classNames={classNames} {...this.props} changeIndex={this.setCurrentIndexHandler}/>
        )
    }

    setCurrentIndexHandler() {
        this.props.setCurrentIndex(this.props.index)
    }
}