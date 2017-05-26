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
    dday: {
        fontSize: '5vw',
        color: '#7984f3',
        textAlign: 'right'
    },
    cancelableDate: {
        fontSize: '2.7vw',
        color: '#777777',
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