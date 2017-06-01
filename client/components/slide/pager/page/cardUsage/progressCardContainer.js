import React from 'react'
import {connect} from 'react-redux'
import * as CalculatorAction from '../../../../../actions/calculatorAction'

import ProgressCardPresenter from './progressCardPresenter'

const mapDispatchToProp = (dispatch) => {
    return {
        toggleCalculatorViewON: (cardInfo) => dispatch(CalculatorAction.toggleCalculatorViewON(cardInfo))
    }
}

@connect(null, mapDispatchToProp)
export default class ProgressCardContainer extends React.Component {
    constructor(props) {
        super(props)

        this.toggleCalculatorViewON = this.toggleCalculatorViewON.bind(this)
    }

    render() {
        const {used, total} = this.props.cardInfo
        const leftAmount = this.getLeftAmount(total, used);
        const leftAmountString = this.leftAmountToString(leftAmount);

        return (
            <ProgressCardPresenter cardName={this.props.cardInfo.name} leftAmountString={leftAmountString} toggleCalculatorViewON={this.toggleCalculatorViewON}/>
        )
    }

    toggleCalculatorViewON() {
        this.props.toggleCalculatorViewON(this.props.cardInfo)
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