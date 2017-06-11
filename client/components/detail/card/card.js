import React from 'react'

const styles = {
    size: {
        padding: '10vw 17vw',
        height: '72px'
    },
    card: {
        width: '27vw',
        marginTop: '8px'
    },
    fl: {
        float: 'left'
    },
    cardInfo: {
        fontSize: '10px',
        color: '#777777',
        width: '36vw',
        opacity: '0.7'
    },
    columnLabel: {
        display: 'inline-block',
        width: '40%'
    },
    column: {
        display: 'inline-block',
        width: '60%'
    },
    ul: {
        listStyleType: 'none',
        listStylePosition: 'inside',
        paddingLeft: '3vw',
        lineHeight: '3vh',
    },
    bottom:{
        clear: 'both',
        width: '100%',
        marginTop: '2vh',
        textAlign: 'right'
    }
}

export default class CardInfo extends React.Component {
    render() {
        return (
            <div style={styles.size}>
                <img style={Object.assign({}, styles.card, styles.fl)} src="./images/card.svg"/>
                <div style={Object.assign({}, styles.cardInfo, styles.fl)}>
                    <div style={styles.columnLabel}>
                        <ul style={styles.ul}>
                            <li>연회비</li>
                            <li>지원금</li>
                            <li>약정</li>
                        </ul>
                    </div>
                    <div style={styles.column}>
                        <ul style={styles.ul}>
                            <li>20만원</li>
                            <li>15만원</li>
                            <li>30만원X6개월</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}