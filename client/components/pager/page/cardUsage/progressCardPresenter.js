import React from 'react'

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
    },
    addSpend: {
        width: '30%',
        fontSize: '12px',
        color: 'rgba(255,255,255,0.7)',
        background: '#7984f3',
        textAlign: 'center',
        border: '1px solid',
        borderRadius: '100px',
        marginTop: '3%',
        marginLeft: '66%',
        padding: '7px'
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
                <div id="addUsageButton" onClick={this.props.toggleCalculatorViewON} style={styles.addSpend}>
                    사용금액 추가
                </div>
            </div>
        )
    }
}