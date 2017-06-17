import React from 'react'
import history from '../../components/history'
import * as CalculatorActions from '../../actions/calculatorAction'
import {connect} from 'react-redux'

const styles = {
    position: {
        float: 'left'
    },
    size: {
        marginLeft: '4vw',
        marginTop: '1vw'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCalculatorViewOFF: () => dispatch(CalculatorActions.toggleCalculatorViewOFF())
    }
}

@connect(null, mapDispatchToProps)
export default class ArrowBack extends React.Component {
    constructor(props) {
        super(props)

        this.navigateBack = this.navigateBack.bind(this)
    }

    navigateBack() {
        history.goBack()
        this.props.toggleCalculatorViewOFF()
    }

    render() {
        return (
            <img onClick={this.navigateBack} style={Object.assign({}, styles.position, styles.size)} src="./images/back.svg"/>
        )
    }
}