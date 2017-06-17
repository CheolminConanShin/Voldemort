import React from "react";
import {connect} from "react-redux";

import NavigationBar from "../navigationBar/navigationBarPresenter";
import Card from "../card/card";
import {TabsPresenterForDetail} from "../tabs/tabsPresenter";
import PagerContainer from "../pager/pagerContainer";
import CardHistory from "../pager/history/cardHistoryContainer";
import Calculator from '../calculator/calculatorContainer'

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
                <PagerContainer trackName="historyTrack">
                    <CardHistory/>
                </PagerContainer>
                <Calculator/>
            </div>
        )
    }
}