import React from 'react'
import UsageButton from './addUsageButton'

const styles = {
    container: {
        margin: '5vw',
        padding: '5vw',
        boxShadow: '0px 1vw 4vw 0px lightgrey',
    },
    cardName: {
        fontSize: '17px',
        textAlign: 'left'
    },
    money: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#7984f3',
        textAlign: 'right'
    }
}

export default class ProgressCardPresenter extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.cardName}>
                    {this.props.cardName}
                </div>
                <div style={styles.money}>
                    {this.props.leftAmountString}
                </div>
                <UsageButton setCalculatorData={this.props.setCalculatorData}/>
            </div>
        )
    }
}