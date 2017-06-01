import React from 'react'
import FirebaseConnector from '../../actions/firebase'
import { updateCardInfo } from '../../actions/cardInfoAction'
import { connect } from 'react-redux'

import SlidePresenter from './slidePresenter'
import CalculatorContainer from '../calculator/calculatorContainer'

const dispatchToProps = (dispatch) => {
    return {
        updateCardInfo: (cardInfo) => dispatch(updateCardInfo(cardInfo))
    }
}

@connect(null, dispatchToProps)
export default class SlideContainer extends React.Component {
    constructor(props) {
        super(props)

        this.database = FirebaseConnector.ref('userId_1')
        this.database.on('value', snapshot => {
            const data = snapshot.val()
            this.props.updateCardInfo(data)
        })
    }

    render() {
        return(
            <div>
                <SlidePresenter/>
                <CalculatorContainer/>
            </div>
        )
    }
}