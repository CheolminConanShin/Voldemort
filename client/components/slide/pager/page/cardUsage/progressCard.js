import React from 'react'

const styles = {
    container: {
        margin: '5vw',
        padding: '5vw',
        boxShadow: '0px 1vw 4vw 0px lightgrey',
    },
    cardName: {
        fontSize: '4.5vw',
        textAlign: 'left'
    },
    money: {
        fontSize: '5vw',
        fontWeight: 'bold',
        color: '#f37979',
        textAlign: 'right'
    },
    addSpend: {
        width: '40%',
        fontSize: '3.5vw',
        color: '#f37979',
        textAlign: 'center',
        border: '3px solid',
        borderRadius: '100px',
        marginTop: '3%',
        marginLeft: '60%',
        padding: '1vw'
    }
}

export default class ProgressCard extends React.Component {
    render() {
        const {used, total} = this.props.cardInfo
        const leftAmount = this.getLeftAmount(total, used);
        const leftAmountString = this.leftAmountToString(leftAmount);

        return (
            <div style={styles.container}>
                <div style={styles.cardName}>
                    {this.props.cardName}
                </div>
                <div style={styles.money}>
                    {leftAmountString}
                </div>
                <div onClick={() => this.props.openCalculator(used, total)} style={styles.addSpend}>
                    사용금액 추가
                </div>
            </div>
        )
    }

    leftAmountToString(leftAmount) {
        let oneMillionLeft = leftAmount.leftManwon > 0 ? " " + leftAmount.leftManwon + "만" : "";
        let oneThousandLeft = leftAmount.leftCheonwon > 0 ? " " + leftAmount.leftCheonwon + "천" : "";
        let oneHundredLeft = leftAmount.leftBaekwon > 0 ? " " + leftAmount.leftBaekwon + "백" : "";

        console.log(oneMillionLeft + oneThousandLeft + oneHundredLeft + "원 부족")
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