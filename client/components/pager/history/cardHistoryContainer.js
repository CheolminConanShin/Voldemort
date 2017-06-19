import React from 'react'
import {View} from 'react-view-pager'
import {connect} from 'react-redux'
import Firebase from '../../../actions/firebase'

import LeftAmountField from './leftAmountField'
import UsageButton from '../cardUsage/addUsageButton'
import HistoryItem from './historyItem'

const styles = {
    container: {
        padding: '0px 30px'
    },
    line: {
        opacity: '0.6'
    },
    usageButton: {
        margin: '10px 120px'
    }
}

const mapStateToProp = (state) => {
    return {
        cardInfo: state.calculatorReducer.cardInfo
    }
}

@connect(mapStateToProp)
export default class CardHistoryContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            history: {}
        }
        this.dateFormatter = this.dateFormatter.bind(this)
        this.moneyFormatter = this.moneyFormatter.bind(this)

        const historyUri = 'history/userId_1';
        Firebase.ref(historyUri).once("value", (data) => {
            this.setState({
                history: data.val()['cardNumber_1']
            })
        })
    }

    dateFormatter(date) {
        return date.substr(0, 2) + "." + date.substr(2,2) + "." + date.substr(4,2);
    }

    render() {
        var me = this
        return (
            <View>
                <div style={styles.container}>
                    <LeftAmountField date={"2017.07"} range={"(07.01 ~ 07.31)"} amount={this.props.cardInfo.leftAmount}/>
                    <hr style={styles.line}/>
                    {Object.keys(this.state.history).map(function(date) {
                        const usedDate = me.dateFormatter(date);
                        const leftAmount = me.moneyFormatter(me.state.history[date]);
                        return <HistoryItem key={date} date={date} usedDate={usedDate} leftAmount={leftAmount}/>
                    })}
                </div>
                <div style={styles.usageButton}>
                    <UsageButton setCalculatorData={undefined}/>
                </div>
            </View>
        )
    }

    moneyFormatter(amountLeft) {
        return (amountLeft + "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
}