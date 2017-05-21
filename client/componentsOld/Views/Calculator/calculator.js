import React from 'react'
import UsageField from './usageField'

import FirebaseConnector from '../../../actions/firebase'

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
    buttons: {
        backgroundColor: 'white',
        width: '25vw',
        height: '11.3vh',
        fontSize: '50px',
        border: '2px solid rgb(152, 152, 152)',
        textAlign: 'center'
    },
    eraseArrow: {
        width: '9vw'
    },
    empty: {
        backgroundColor: '#bcbcbc',
        width: '25vw',
        height: '11.3vh',
        border: '2px solid rgb(152, 152, 152)',
    },
    enter: {
        backgroundColor: '#7984f3',
        color: 'white',
        fontSize: '50px',
        textAlign: 'center'
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
            used: this.props.cardInfo.used + ""
        }

        this.buttonHandler = this.buttonHandler.bind(this)
        this.eraseHandler = this.eraseHandler.bind(this)
        this.saveHandler = this.saveHandler.bind(this)
    }

    buttonHandler(event) {
        let number = event.target.innerHTML;
        this.refs.usage.setState({
            usage: this.refs.usage.state.usage + number
        })
    }

    eraseHandler() {
        this.refs.usage.setState({
            usage: this.refs.usage.state.usage.slice(0, -1)
        })
    }

    saveHandler() {
        const usage = this.refs.usage.state.usage == '' ? 0 : this.refs.usage.state.usage
        const sumUsedAmount = parseInt(this.state.used) + parseInt(usage);

        this.setState({
            used: sumUsedAmount
        })
        FirebaseConnector.ref('userId_1/cardNumber_1').update({
            'used' : sumUsedAmount
        })
        this.props.closeCalculator()
    }

    render() {
        const subTotal = (this.state.total - this.state.used) + ""

        return (
            <div style={styles.container}>
                <div style={styles.cardInfo}>
                    <span>{this.state.cardName}</span><span style={styles.goal}>실적 {formatNumber(this.state.total)}</span>
                </div>
                <div style={styles.calculateBox}>
                    <span>{formatNumber(subTotal)} + </span><UsageField ref="usage" usage={''}/><span> = {formatNumber(subTotal)}</span>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td onClick={this.buttonHandler} style={styles.buttons}>1</td>
                            <td onClick={this.buttonHandler} style={styles.buttons}>2</td>
                            <td onClick={this.buttonHandler} style={styles.buttons}>3</td>
                            <td onClick={this.eraseHandler} style={styles.buttons}><img style={styles.eraseArrow} src="./images/shape.svg"/></td>
                        </tr>
                        <tr>
                            <td onClick={this.buttonHandler} style={styles.buttons}>4</td>
                            <td onClick={this.buttonHandler} style={styles.buttons}>5</td>
                            <td onClick={this.buttonHandler} style={styles.buttons}>6</td>
                            <td style={styles.buttons}>+/-</td>
                        </tr>
                        <tr>
                            <td onClick={this.buttonHandler} style={styles.buttons}>7</td>
                            <td onClick={this.buttonHandler} style={styles.buttons}>8</td>
                            <td onClick={this.buttonHandler} style={styles.buttons}>9</td>
                            <td onClick={this.saveHandler} style={styles.enter} rowSpan="2">완료</td>
                        </tr>
                        <tr>
                            <td style={styles.empty}></td>
                            <td onClick={this.buttonHandler} style={styles.buttons}>0</td>
                            <td style={styles.empty}></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}