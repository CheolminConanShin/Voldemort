import React from "react";
import {Provider} from 'react-redux';
import {Router, Route} from "react-router-dom";

import SlideView from './slide/slideContainer'
import CardDetailView from './detail/cardDetailContainer'
import store from "../store"
import history from './history'

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <div style={{height: "100%"}}>
                        <Route exact path="/" component={SlideView}/>
                        <Route exact path="/detail" component={CardDetailView}/>
                    </div>
                </Router>
            </Provider>
        )
    }
}