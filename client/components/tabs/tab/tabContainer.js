import React from 'react'
import { setCurrentSlideIndex } from '../../../actions/slideAction'
import { connect } from 'react-redux'

const styles = {
    size: {
        float: 'left',
        marginLeft: '1.2vw',
        marginRight: '1.2vw'
    },
    font: {
        fontSize: '2vh',
        textAlign: 'center',
        color: '#1d1d1d'
    }
}

class TabContainer extends React.Component {
    constructor(props) {
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
    }

    render() {
        const style = Object.assign({}, styles.size, styles.font, styles.border, {width: this.props.width});
        const activeTabClass = this.props.index == this.props.currentIndex ? "active" : ""
        const classNames = "tab" + this.props.index + " " + activeTabClass

        return (
            <div className={classNames} onClick={this.clickHandler} style={style}>{this.props.text}</div>
        )
    }

    clickHandler() {
        this.props.setCurrentIndex(this.props.index)
    }
}

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

export default connect(mapStateToProps, dispatchToProps)(TabContainer)