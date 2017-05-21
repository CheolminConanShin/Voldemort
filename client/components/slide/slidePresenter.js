import React from "react";
import NavigationBar from "../navigationBar/navigationBarPresenter";
import Tabs from "../tabs/tabsPresenter";
import Pager from "./pager/pagerContainer";

export default class SlidePresenter extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar title="볼드모트"/>
                <Tabs/>
                <Pager/>
            </div>
        )
    }
}