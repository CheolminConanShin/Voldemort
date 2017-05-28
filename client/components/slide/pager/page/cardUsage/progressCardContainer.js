import React from 'react'
import {connect} from 'react-redux'
import * as CalculatorAction from '../../../../../actions/calculatorAction'

import ProgressCardPresenter from './progressCardPresenter'

const mapStatesToProps = (state) => {
    return {
        cardInfo: state.cardInfoReducer.cardInfo
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        toggleCalculator: () => dispatch(CalculatorAction.toggleCalculatorView())
    }
}

@connect(mapStatesToProps, mapDispatchToProp)
export default class ProgressCardContainer extends React.Component {
    constructor(props) {
        super(props)

        this.toggleCalculator = this.toggleCalculator.bind(this)
    }

    render() {
        const {used, total} = this.props.cardInfo
        const leftAmount = this.getLeftAmount(total, used);
        const leftAmountString = this.leftAmountToString(leftAmount);

        return (
            <ProgressCardPresenter cardName={this.props.cardName} leftAmountString={leftAmountString} toggleCalculator={this.toggleCalculator}/>
        )
    }

    toggleCalculator() {
        this.props.toggleCalculator(this.props.cardInfo)
    }

    leftAmountToString(leftAmount) {
        let oneMillionLeft = leftAmount.leftManwon > 0 ? " " + leftAmount.leftManwon + "만" : "";
        let oneThousandLeft = leftAmount.leftCheonwon > 0 ? " " + leftAmount.leftCheonwon + "천" : "";
        let oneHundredLeft = leftAmount.leftBaekwon > 0 ? " " + leftAmount.leftBaekwon + "백" : "";

        return oneMillionLeft + oneThousandLeft + oneHundredLeft + "원 부족"
    }

    getLeftAmount(total, used) {
        const leftAmount = total - used
        const leftManwon = parseInt(leftAmount / 10000)
        const leftCheonwon = parseInt(leftAmount % 10000 / 1000)
        const leftBaekwon = parseInt(leftAmount % 1000 / 100)

        return {leftManwon, leftCheonwon, leftBaekwon}
    }
}