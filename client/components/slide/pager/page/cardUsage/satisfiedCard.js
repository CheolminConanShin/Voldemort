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

export default class SatisfiedCard extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.cardName}>
                    {this.props.cardName}
                </div>
                <div style={styles.satisfied}>
                    달성
                </div>
                <hr style={styles.underLine}/>
                <div style={styles.depositDate}>
                    05.17 입금 예정
                </div>
            </div>
        )
    }
}