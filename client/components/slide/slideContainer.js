import React from 'react'
import FirebaseConnector from '../../actions/firebase'
import { updateCardInfo } from '../../actions/cardInfoAction'
import { connect } from 'react-redux'

import SlidePresenter from './slidePresenter'
import CalculatorContainer from '../../componentsOld/Views/Calculator/calculatorContainer'

const dispatchToProps = (dispatch) => {
    return {
        updateCardInfo: (cardInfo) => dispatch(updateCardInfo(cardInfo))
    }
}

@connect(null, dispatchToProps)
export default class SlideContainer extends React.Component {
    constructor(props) {
        super(props)

        this.database = FirebaseConnector.ref('userId_1/cardNumber_1')
        this.database.on('value', snapshot => {
            const data = snapshot.val()
            for(var cardId in data){
                console.log(data[cardId])
            }
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