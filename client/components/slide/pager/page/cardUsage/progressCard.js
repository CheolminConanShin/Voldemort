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
    },
    satisfied: {
        fontSize: '5vw',
        color: '#7984f3',
        textAlign: 'right'
    },
    underLine: {
        width: '100%',
        borderTop: '3px solid #d8d8d8'
    },
    depositDate: {
        fontSize: '4vw',
        color: '#777777',
        textAlign: 'left'
    },
    cancel: {
        fontSize: '5vw',
        fontWeight: 'bold',
        color: '#f37979',
        textAlign: 'right',
    },
    call: {
        width: '30%',
        fontSize: '3.5vw',
        color: '#f37979',
        textAlign: 'center',
        border: '3px solid',
        borderRadius: '100px',
        marginTop: '3%',
        marginLeft: '73%',
        padding: '22px'
    },
    cancelableDate: {
        fontSize: '2.7vw',
        color: '#777777',
        textAlign: 'right'
    },
}

export default class ProgressCard extends React.Component {
    render() {
        const {used, total} = this.props.cardInfo

        const leftAmount = total - used
        const leftManwon = parseInt(leftAmount / 10000)
        const leftCheonwon = parseInt(leftAmount % 10000 / 1000)
        const leftBaekwon = parseInt(leftAmount % 1000 / 100)

        const manwonString = leftManwon > 0 ? " " + leftManwon + "만" : ""
        const cheonwonString = leftCheonwon > 0 ? " " + leftCheonwon + "천" : ""
        const baekwonString = leftBaekwon > 0 ? " " + leftBaekwon + "백" : ""

        const amountString = manwonString + cheonwonString + baekwonString + "원 부족"

        return (
            <div style={styles.container}>
                <div style={styles.cardName}>
                    {this.props.cardName}
                </div>
                <div style={styles.money}>
                    {amountString}
                </div>
                <div onClick={() => this.props.openCalculator(used, total)} style={styles.addSpend}>
                    사용금액 추가
                </div>
            </div>
        )
    }
}