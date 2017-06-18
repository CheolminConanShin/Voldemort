import React from 'react'
import {connect} from 'react-redux'
import AnimateHeight from 'react-animate-height'

import FirebaseConnector from "../../actions/firebase";
import * as CalculatorActions from '../../actions/calculatorAction'
import CalculatorPresenter from './calculatorPresenter'

const mapStateToProp = (state) => {
    return {
        toggle: state.calculatorReducer.toggle,
        cardInfo: state.calculatorReducer.cardInfo
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        toggleCalculatorViewOFF: () => dispatch(CalculatorActions.toggleCalculatorViewOFF())
    }
}

@connect(mapStateToProp, mapDispatchToProp)
export default class CalculatorContainer extends React.Component {
    constructor(props) {
        super(props)

        this.updateCardData = this.updateCardData.bind(this)
    }

    updateCardData(sumUsedAmount) {
        FirebaseConnector.ref('userId_1/cardNumber_1').update({
            'used' : sumUsedAmount
        })
        this.props.toggleCalculatorViewOFF()
    }

    render() {
        return (
            <AnimateHeight
                duration={ 1000 }
                height={ this.props.toggle ? 'auto' : 0 }
                easing={'true'}>
                <CalculatorPresenter cardInfo={this.props.cardInfo} updateCardData={this.updateCardData}/>
            </AnimateHeight>
        )
    }
}