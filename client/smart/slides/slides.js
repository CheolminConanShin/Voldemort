import React from 'react'
import FirebaseConnector from '../../actions/firebase'
import { updateCardInfo } from '../../actions/cardInfoAction'
import { connect } from 'react-redux'


import DumbSlides from '../../dumb/slides/slides'

class SmartSlides extends React.Component {
    constructor(props) {
        super(props)

        this.database = FirebaseConnector.ref('userId_1/cardNumber_1')
        this.database.on('value', snapshot => {
            const data = snapshot.val()
            this.props.updateCardInfo(data)
        })
    }

    render() {
        return(
            <DumbSlides/>
        )
    }
}

const dispatchToProps = (dispatch) => {
    return {
        updateCardInfo: (cardInfo) => {
            dispatch(updateCardInfo(cardInfo))
        }
    }
}

export default connect(null, dispatchToProps)(SmartSlides)