import React from "react";
import {connect} from "react-redux";

import NavigationBar from "../navigationBar/navigationBarPresenter";
import Card from "../card/card";
import {TabsPresenterForDetail} from "../tabs/tabsPresenter";

const mapStateToProp = (state) => {
    return {
        cardInfo: state.calculatorReducer.cardInfo
    }
}

@connect(mapStateToProp)
export default class CardDetail extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar arrow={true} pencil={true} title={this.props.cardInfo.name}/>
                <Card/>
                <TabsPresenterForDetail/>
            </div>
        )
    }
}