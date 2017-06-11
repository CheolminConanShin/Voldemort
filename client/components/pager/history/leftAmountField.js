import React from 'react'

export default class LeftAmountField extends React.Component {
    render() {
        return (
            <div>
                <span id="date">{this.props.date}</span>
                <span id="amount">{this.props.amount}</span>
            </div>
        )
    }
}