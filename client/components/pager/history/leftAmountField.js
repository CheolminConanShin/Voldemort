import React from 'react'
import {connect} from 'react-redux'

const styles = {
    container: {
        lineHeight: '37px',
        color: '#777777',
    },
    date: {
        fontSize: '13px',
        verticalAlign: 'middle',
    },
    range: {
        fontSize: '13px',
        opacity: '0.7',
        marginLeft: '6px',
        verticalAlign: 'middle',
    },
    amount: {
        color: '#7984f3',
        fontSize: '18px',
        fontWeight: 'bold',
        verticalAlign: 'middle',
        float: 'right'
    }
}

const mapStateToProps = (state) => {
    return {
        cardInfo: state.calculatorReducer.cardInfo
    }
}

@connect(mapStateToProps)
export default class LeftAmountField extends React.Component {
    render() {
        const {used, total} = this.props.cardInfo
        const leftAmount = this.leftAmountToString(total, used)
        return (
            <div style={styles.container}>
                <span style={styles.date} id="date">{this.props.date}</span>
                <span style={styles.range} id="range">{this.props.range}</span>
                <span style={styles.amount} id="amount">{leftAmount}</span>
            </div>
        )
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