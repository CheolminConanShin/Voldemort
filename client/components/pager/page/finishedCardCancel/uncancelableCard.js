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
    dday: {
        fontSize: '20px',
        color: '#f37979',
        textAlign: 'right'
    },
    cancelableDate: {
        fontSize: '12px',
        color: '#777777',
        opacity: '0.6',
        textAlign: 'right'
    },
}

export default class UncancelableCard extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.cardName}>
                    {this.props.cardName}
                </div>
                <div style={styles.dday}>
                    {this.props.dDay} 일 남음
                </div>
                <div style={styles.cancelableDate}>
                    해지가능일 : {this.props.cancelableDate}
                </div>
            </div>
        )
    }
}