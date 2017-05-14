import React from 'react'

const styles = {
    container: {
        position: 'absolute',
        top: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(29, 29, 29, 0.7)',
    },
    cardInfo: {
        height: '43.4vh',
        color: 'white',
        fontSize: '45px',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '30px 40px'
    },
    goal: {
        marginLeft: '49%'
    },
    calculateBox: {
        padding: '0px 40px',
        backgroundColor: '#E3E3E3',
        color: '#989898',
        fontSize: '60px',
        lineHeight: '11vh',
        border: '3px solid rgb(152, 152, 152)'
    },
    inputBox: {
        display: 'inline-block',
        width: '35%'
    },
    numbers: {
        backgroundColor: '#E3E3E3',
        width: '25%',
        display: 'inline-block',
        padding: '3.9vh',
        fontSize: '40px',
        border: '2px solid rgb(152, 152, 152)'
    }
}

export default class Calculator extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.cardInfo}>
                    <span>국민 XXXX</span><span style={styles.goal}>실적 300,000</span>
                </div>
                <div style={styles.calculateBox}>
                    <span>234,000 + </span><span style={styles.inputBox}></span><span> = 234,000</span>
                </div>
                <div>
                    <div style={styles.numbers}>1</div>
                    <div style={styles.numbers}>2</div>
                    <div style={styles.numbers}>3</div>
                    <div style={styles.numbers}>지우기</div>
                    <div style={styles.numbers}>4</div>
                    <div style={styles.numbers}>5</div>
                    <div style={styles.numbers}>6</div>
                    <div style={styles.numbers}>+/-</div>
                    <div style={styles.numbers}>7</div>
                    <div style={styles.numbers}>8</div>
                    <div style={styles.numbers}>9</div>
                    <div style={styles.numbers}>완료</div>
                    <div style={styles.numbers}>""</div>
                    <div style={styles.numbers}>0</div>
                    <div style={styles.numbers}>""</div>
                    <div style={styles.numbers}>완료</div>
                </div>
            </div>
        )
    }
}