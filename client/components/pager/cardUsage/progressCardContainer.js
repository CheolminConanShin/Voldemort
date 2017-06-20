import React from 'react'
import {connect} from 'react-redux'
import * as CalculatorAction from '../../../actions/calculatorAction'
import history from '../../../components/history'

import ProgressCardPresenter from './progressCardPresenter'

const mapDispatchToProp = (dispatch) => {
    return {
        setCalculatorData: (cardInfo) => dispatch(CalculatorAction.setCalculatorData(cardInfo))
    }
}

@connect(null, mapDispatchToProp)
export default class ProgressCardContainer extends React.Component {
    constructor(props) {
        super(props)

        this.setCalculatorData = this.setCalculatorData.bind(this)
    }

    render() {
        const {used, total} = this.props.cardInfo
        const leftAmountString = this.leftAmountToString(total, used);

        return (
            <ProgressCardPresenter cardName={this.props.cardInfo.name} leftAmountString={leftAmountString} setCalculatorData={this.setCalculatorData}/>
        )
    }

    setCalculatorData() {
        this.props.setCalculatorData(this.props.cardInfo)
        history.push('/detail')

    }

    leftAmountToString(total, used) {
        const leftAmount = total - used
        const leftManwon = parseInt(leftAmount / 10000)
        const leftCheonwon = parseInt(leftAmount % 10000 / 1000)
        const leftBaekwon = parseInt(leftAmount % 1000 / 100)

        let oneMillionLeft = leftManwon > 0 ? " " + leftManwon + "만" : "";
        let oneThousandLeft = leftCheonwon > 0 ? " " + leftCheonwon + "천" : "";
        let oneHundredLeft = leftBaekwon > 0 ? " " + leftBaekwon + "백" : "";

        return oneMillionLeft + oneThousandLeft + oneHundredLeft + "원 부족"
    }
}