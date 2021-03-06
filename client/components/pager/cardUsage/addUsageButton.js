import React from 'react'
import {connect} from 'react-redux'
import * as CalculatorAction from '../../../actions/calculatorAction'

const styles = {
    addSpend: {
        fontSize: '12px',
        color: 'rgba(255,255,255,0.7)',
        background: '#7984f3',
        textAlign: 'center',
        border: '1px solid',
        borderRadius: '100px',
        padding: '7px'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCalculator: () => dispatch(CalculatorAction.toggleCalculatorView())
    }
}

@connect(null, mapDispatchToProps)
export default class UsageButton extends React.Component {
    constructor(props) {
        super(props)

        this.toggleCalculator = this.toggleCalculator.bind(this)
    }

    render() {
        return (
            <div id="addUsageButton" onClick={this.toggleCalculator} style={styles.addSpend}>
                사용금액 추가
            </div>
        )
    }

    toggleCalculator() {
        if (this.props.setCalculatorData != undefined) {
            this.props.setCalculatorData()
        }
        this.props.toggleCalculator()
    }
}