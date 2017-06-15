import React from 'react'

const styles = {
    container: {
        lineHeight: '37px',
        color: '#777777',
        display: 'flow-root'
    },
    date: {
        fontSize: '13px',
        display: 'table-cell',
        verticalAlign: 'middle',
        float: 'left'
    },
    range: {
        fontSize: '13px',
        opacity: '0.7',
        marginLeft: '6px',
        display: 'table-cell',
        verticalAlign: 'middle',
        float: 'left'
    },
    amount: {
        color: '#7984f3',
        fontSize: '18px',
        fontWeight: 'bold',
        display: 'table-cell',
        verticalAlign: 'middle',
        float: 'right'
    }
}

export default class LeftAmountField extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <span style={styles.date} id="date">{this.props.date}</span>
                <span style={styles.range} id="range">{this.props.range}</span>
                <span style={styles.amount} id="amount">{this.props.amount}</span>
            </div>
        )
    }
}