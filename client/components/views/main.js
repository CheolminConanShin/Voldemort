import React from "react";

import NavigationBar from "../navigationBar/navigationBarPresenter";
import {TabsPresenterForSlider} from "../tabs/tabsPresenter";
import PagerContainer from "../pager/pagerContainer";
import CardUsagePresenter from "../pager/page/cardUsage/cardUsagePresenter";
import FinishedCardCancelPresenter from "../pager/page/finishedCardCancel/finishedCardCancelPresenter";
import RegisterNewCardPresenter from "../pager/page/registerNewCard/registerNewCardPresenter";

export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <NavigationBar title="볼드모트"/>
                <TabsPresenterForSlider/>
                <PagerContainer>
                    <CardUsagePresenter/>
                    <FinishedCardCancelPresenter/>
                    <RegisterNewCardPresenter/>
                </PagerContainer>
            </div>
        )
    }
}