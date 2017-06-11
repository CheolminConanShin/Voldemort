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
    satisfied: {
        fontSize: '20px',
        color: '#7984f3',
        textAlign: 'right'
    },
    underLine: {
        width: '100%',
        borderTop: '1px solid #d8d8d8'
    },
    depositDate: {
        fontSize: '12px',
        color: '#758d9a',
        opacity: '0.6',
        textAlign: 'left'
    }
}

export default class SatisfiedCard extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.cardName}>
                    {this.props.cardInfo.name}
                </div>
                <div style={styles.satisfied}>
                    달성
                </div>
                <hr style={styles.underLine}/>
                <div style={styles.depositDate}>
                    {this.props.cardInfo.depositDate} 입금 예정
                </div>
            </div>
        )
    }
}