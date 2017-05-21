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
    }
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