import React from 'react'

const styles = {
    container: {
        margin: '5vw',
        padding: '5vw',
        boxShadow: '0px 1vw 4vw 0px lightgrey',
    },
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

export default class NewCard extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.cardName}>
                    {this.props.cardName}
                </div>
                {this.props.ppCard ? <img style={styles.pp} src="./images/ico_pp.png"/> : undefined}
                <div>
                    <div style={styles.subTitle}>연회비</div>
                    <div className="annualFeeField" style={styles.subTitle}>{this.props.annualFee}</div>
                </div>
                <div>
                    <div style={styles.subTitle}>바우처</div>
                    <div className="voucherField" style={styles.subTitle}>{this.props.voucher}</div>
                </div>
                <div>
                    <div className="plannerField" style={styles.planner}><b>{this.props.numberOfPlanner}명</b>의 설계사 대기중</div>
                    <div style={styles.receiveInfo}>정보 받기</div>
                </div>
            </div>
        )
    }
}