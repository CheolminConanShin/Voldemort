import React from "react";
import {setCurrentSlideIndex} from "../../../actions/slideAction";
import {connect} from "react-redux";

import TabPresenter from "./tabPresenter";

class TabContainer extends React.Component {
    render() {
        const activeTabClass = this.props.index == this.props.currentIndex ? "active" : ""
        const classNames = "tab" + this.props.index + " " + activeTabClass
        return (
            <TabPresenter classNames={classNames} {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentIndex: state.slidesReducer.currentIndex
    }
}

const dispatchToProps = (dispatch) => {
    return {
        setCurrentIndex: () => dispatch(setCurrentSlideIndex(this.props.index))
    }
}

export default connect(mapStateToProps, dispatchToProps)(TabContainer)