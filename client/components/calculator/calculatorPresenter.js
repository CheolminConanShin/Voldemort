import React from "react";

import NumbersPresenter from "./numbersPresenter";

const styles = {
    container: {
        position: 'absolute',
        top: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(29, 29, 29, 0.7)',
    },
    cardInfo: {
        height: '43.4vh',
        color: 'white',
        fontSize: '45px',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '30px 40px'
    },
    goal: {
        marginLeft: '49%'
    },
    calculateBox: {
        padding: '0px 40px',
        backgroundColor: '#f8f8f8',
        color: '#989898',
        fontSize: '60px',
        lineHeight: '11vh',
        border: '3px solid rgb(152, 152, 152)'
    },
    inputBox: {
        display: 'inline-block',
        width: '35%'
    }
}

const formatNumber = (number) => {
    return [number.slice(0,number.length-3), ',', number.slice(-3)].join('')
}

export default class Calculator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cardName: '국민 XXXX',
            total: this.props.cardInfo.total + "",
            used: this.props.cardInfo.used + "",
            usage: ''
        }

        this.buttonHandler = this.buttonHandler.bind(this)
        this.eraseHandler = this.eraseHandler.bind(this)
        this.saveHandler = this.saveHandler.bind(this)
    }

    buttonHandler(event) {
        let number = event.target.innerHTML;
        this.setState({
            usage: this.state.usage + number
        })
    }

    eraseHandler() {
        this.setState({
            usage: this.state.usage.slice(0, -1)
        })
    }

    saveHandler() {
        const usage = this.state.usage == '' ? 0 : this.state.usage
        const sumUsedAmount = parseInt(this.state.used) + parseInt(usage);
        this.props.updateCardData(sumUsedAmount)
    }

    render() {
        const subTotal = (this.state.total - this.state.used) + ""

        return (
            <div style={styles.container}>
                <div style={styles.cardInfo}>
                    <span>{this.state.cardName}</span>
                    <span style={styles.goal}>실적 {formatNumber(this.state.total)}</span>
                </div>
                <div style={styles.calculateBox}>
                    <span>{formatNumber(subTotal)} + </span>
                    <span style={styles.inputBox}>{this.state.usage}</span>
                    <span> = {formatNumber(subTotal)}</span>
                </div>
                <NumbersPresenter buttonHandler={this.buttonHandler} eraseHandler={this.eraseHandler} saveHandler={this.saveHandler}/>
            </div>
        )
    }
}