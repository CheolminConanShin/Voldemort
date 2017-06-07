import React from "react";
import NavigationBar from "../navigationBar/navigationBarPresenter";
import TabsPresenter from "../tabs/tabsPresenter";
import Pager from "./pager/pagerContainer";

const styles = {
    above: {
        zIndex: 2,
        background: 'white',
        position: 'fixed'
    },
    below: {
        zIndex: 1,
        paddingTop: '100px'
    }
}

export default class SlidePresenter extends React.Component {
    render() {
        return (
            <div>
                <div style={styles.above}>
                    <NavigationBar title="볼드모트"/>
                    <TabsPresenter/>
                </div>
                <div style={styles.below}>
                    <Pager/>
                </div>
            </div>
        )
    }
}