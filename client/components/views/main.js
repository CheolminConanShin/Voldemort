import React from "react";

import NavigationBar from "../navigationBar/navigationBarPresenter";
import {TabsPresenterForSlider} from "../tabs/tabsPresenter";
import PagerContainer from "../pager/pagerContainer";
import CardUsagePresenter from "../pager/cardUsage/cardUsagePresenter";
import FinishedCardCancelPresenter from "../pager/finishedCardCancel/finishedCardCancelPresenter";
import RegisterNewCardPresenter from "../pager/registerNewCard/registerNewCardPresenter";

export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <NavigationBar title="볼드모트"/>
                <TabsPresenterForSlider/>
                <PagerContainer trackName="mainTrack">
                    <CardUsagePresenter/>
                    <FinishedCardCancelPresenter/>
                    <RegisterNewCardPresenter/>
                </PagerContainer>
            </div>
        )
    }
}