import React from 'react'
import NavigationBar from '../navigationBar/navigationBarPresenter'
import {connect} from 'react-redux'

const mapStateToProp = (state) => {
    return {
        cardInfo: state.calculatorReducer.cardInfo
    }
}

@connect(mapStateToProp)
export default class CardDetailContainer extends React.Component {
    render() {
        return (
            <NavigationBar arrow title={this.props.cardInfo.name}/>
        )
    }
}