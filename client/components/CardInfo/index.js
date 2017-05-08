import React from 'react'

const styles = {
    view: {
        margin: '10vw 18vw',
        fontSize: '1.7vh',
        color: '#777777'
    },
    card: {
        width: '30vw',
        height: '19vw'
    },
    fl: {
        float: 'left'
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
        paddingTop: '2vh',
        textAlign: 'right'
    }
}

export default class CardInfo extends React.Component {
    render() {
        return (
            <div style={styles.view}>
                <img style={Object.assign({}, styles.card, styles.fl)} src="./images/card.svg"/>
                <div style={Object.assign({width: '34vw', paddingTop:'1vh'}, styles.fl)}>
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
                <div style={styles.bottom}>
                    이** 설계사 >
                </div>
            </div>
        )
    }
}