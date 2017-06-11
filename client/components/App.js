import React from "react";
import {Provider} from "react-redux";
import {Route, Router} from "react-router-dom";
import FirebaseConnector from "../actions/firebase";
import {updateCardInfo} from "../actions/cardInfoAction";

import MainView from "./views/main";
import CardDetail from "./views/cardDetail";
import store from "../store";
import history from "./history";

export default class App extends React.Component {
    render() {
        const id = 'userId_1'
        this.database = FirebaseConnector.ref(id)
        this.database.on('value', snapshot => {
            const data = snapshot.val()
            store.dispatch(updateCardInfo(data))
        })
        return (
            <Provider store={store}>
                <Router history={history}>
                    <div style={{height: "100%"}}>
                        <Route exact path="/" component={MainView}/>
                        <Route exact path="/detail" component={CardDetail}/>
                    </div>
                </Router>
            </Provider>
        )
    }
}