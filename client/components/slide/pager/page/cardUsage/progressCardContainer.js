import React from 'react'
import {connect} from 'react-redux'

import ProgressCardPresenter from './progressCardPresenter'

const mapStatesToProps = (state) => {
    return {
        cardInfo: state.cardInfoReducer.cardInfo
    }
}

@connect(mapStatesToProps)
export default class ProgressCardContainer extends React.Component {
    render() {
        const {used, total} = this.props.cardInfo
        const leftAmount = this.getLeftAmount(total, used);
        const leftAmountString = this.leftAmountToString(leftAmount);

        return (
            <ProgressCardPresenter cardName={this.props.cardName} leftAmountString={leftAmountString}/>
        )
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