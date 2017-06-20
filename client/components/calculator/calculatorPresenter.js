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

        this.buttonHandler = this.buttonHandler.bind(this)
        this.eraseHandler = this.eraseHandler.bind(this)
        this.saveHandler = this.saveHandler.bind(this)
    }

    buttonHandler(event) {
        let number = event.target.innerHTML;
        this.props.setCurrentUsageValue(this.props.currentValue + number)
    }

    eraseHandler() {
        this.props.setCurrentUsageValue(this.props.currentValue.slice(0, -1))
    }

    saveHandler() {
        const usage = this.props.currentValue == '' ? 0 : this.props.currentValue
        const sumUsedAmount = parseInt(this.props.cardInfo.used) + parseInt(usage);
        this.props.updateCardUsedAmountInDB(sumUsedAmount)
        this.props.updateUsedValue(sumUsedAmount)
    }

    render() {
        return (
            <div style={styles.container}>
                <NumbersPresenter buttonHandler={this.buttonHandler} eraseHandler={this.eraseHandler} saveHandler={this.saveHandler}/>
            </div>
        )
    }
}