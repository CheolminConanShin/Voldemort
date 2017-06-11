import React from "react";
import NavigationBar from "../navigationBar/navigationBarPresenter";
import {TabsPresenterForSlider} from "../tabs/tabsPresenter";
import Pager from "./pager/pagerContainer";

import CardUsagePresenter from './pager/page/cardUsage/cardUsagePresenter'
import FinishedCardCancelPresenter from './pager/page/finishedCardCancel/finishedCardCancelPresenter'
import RegisterNewCardPresenter from './pager/page/registerNewCard/registerNewCardPresenter'


export default class SlidePresenter extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar title="볼드모트"/>
                <TabsPresenterForSlider/>
                <Pager>
                    <CardUsagePresenter/>
                    <FinishedCardCancelPresenter/>
                    <RegisterNewCardPresenter/>
                </Pager>
            </div>
        )
    }
}