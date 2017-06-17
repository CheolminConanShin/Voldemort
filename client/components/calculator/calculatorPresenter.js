import React from "react";

import NumbersPresenter from "./numbersPresenter";

const styles = {
    container: {
        width: '100%',
        background: 'rgba(29, 29, 29, 0.7)',
    }
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
        return (
            <div style={styles.container}>
                <NumbersPresenter buttonHandler={this.buttonHandler} eraseHandler={this.eraseHandler} saveHandler={this.saveHandler}/>
            </div>
        )
    }
}