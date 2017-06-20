import React from 'react'
import Time from 'react-time'
import {connect} from 'react-redux'

const styles = {
    row: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontSize: '16px',
        padding: '2px 0px'
    },
    date: {
        marginRight: 'auto'
    },
    currency: {
        color: '#575757',
        fontSize: '12px',
        marginTop: '3px',
        marginRight: '36px'
    }
}

const mapStateToProps = (state) => {
    return {
        currentValue: state.calculatorReducer.currentValue
    }
}

@connect(mapStateToProps)
export default class NewHistoryItem extends React.Component {
    render() {
        const today = new Date()
        return (
            <div style={styles.row}>
                <span style={styles.date}><Time value={today} format="YY.MM.DD"/></span>
                <span style={styles.currency}>{this.props.currentValue} 원</span>
            </div>
        )
    }
}