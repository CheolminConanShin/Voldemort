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

export class ProgressCard extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.cardName}>
                    {this.props.cardName}
                </div>
                <div style={styles.money}>
                    {this.props.money}
                </div>
                <div style={styles.addSpend}>
                    사용금액 추가
                </div>
            </div>
        )
    }
}

export class SatisfiedCard extends React.Component {
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

export class CancelableCard extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.cardName}>
                    {this.props.cardName}
                </div>
                <div style={styles.cancel}>
                    해지가능
                </div>
                <div style={styles.call}>
                    전화하기
                </div>
            </div>
        )
    }
}

export class UncancelableCard extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.cardName}>
                    {this.props.cardName}
                </div>
                <div style={styles.satisfied}>
                    {this.props.dDay}
                </div>
                <div style={styles.cancelableDate}>
                    {this.props.cancelableDate}
                </div>
            </div>
        )
    }
}

const newCardStyle = {
    cardName: {
        fontSize: '4.5vw',
        textAlign: 'left',
        display: 'inline-block',
        marginBottom: '10px'
    },
    pp: {
        display: 'inline-block',
        float: 'right',
        height: '6vw'
    },
    subTitle: {
        display: 'inline-block',
        marginRight: '16px',
        fontSize: '3.5vw',
        color: '#777777',
        marginTop: '6px'
    },
    planner: {
        display: 'inline-block',
        fontSize: '3.3vw',
        color: '#1d1d1d',
        marginTop: '3.5em',
        paddingBottom: '1em'
    },
    receiveInfo: {
        display: 'inline-block',
        width: '30%',
        fontSize: '3.5vw',
        color: '#7984f3',
        textAlign: 'center',
        border: '3px solid',
        borderRadius: '100px',
        marginTop: '11%',
        padding: '22px',
        float: 'right'
    }
}

export class NewCardInfo extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={newCardStyle.cardName}>
                    {this.props.cardName}
                </div>
                {this.props.ppCard ? <img style={newCardStyle.pp} src="./images/ico_pp.png"/> : undefined}
                <div>
                    <div style={newCardStyle.subTitle}>연회비</div>
                    <div style={newCardStyle.subTitle}>{this.props.annualFee}</div>
                </div>
                <div>
                    <div style={newCardStyle.subTitle}>바우처</div>
                    <div style={newCardStyle.subTitle}>{this.props.voucher}</div>
                </div>
                <div>
                    <div style={newCardStyle.planner}><b>{this.props.numberOfPlanner}명</b>의 설계사 대기중</div>
                    <div style={newCardStyle.receiveInfo}>정보 받기</div>
                </div>
            </div>
        )
    }
}