import React from 'react'
import {connect} from 'react-redux'

import NavigationBar from '../navigationBar/navigationBarPresenter'
import {TabsPresenterForDetail} from '../tabs/tabsPresenter'

const mapStateToProp = (state) => {
    return {
        cardInfo: state.calculatorReducer.cardInfo
    }
}

@connect(mapStateToProp)
export default class CardDetailContainer extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar arrow pencil title={this.props.cardInfo.name}/>
                <TabsPresenterForDetail/>
            </div>
        )
    }
}