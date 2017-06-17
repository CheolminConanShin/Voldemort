import React from 'react'
import {connect} from 'react-redux'
import AnimateHeight from 'react-animate-height'

const styles = {
    size: {
        overflowY: 'auto',
        height: '120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        width: '27vw',
        marginTop: '8px'
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
        lineHeight: '11px',
    }
}

const mapStatesToProps = (state) => {
    return {
        calculatorToggleState: state.calculatorReducer.toggle
    }
}

@connect(mapStatesToProps)
export default class CardInfo extends React.Component {
    render() {
        return (
            <AnimateHeight
                duration={ 500 }
                height={ this.props.calculatorToggleState ? 5 : 'auto' }>
                <div style={styles.size}>
                    <img style={styles.card} src="./images/card.svg"/>
                    <div style={styles.cardInfo}>
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
            </AnimateHeight>
        )
    }
}