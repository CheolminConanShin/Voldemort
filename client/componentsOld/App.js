import React from "react";
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from "react-router-dom";

import SmartSlides from '../components/slide/slideContainer'
import CardDetailView from "./Views/CardDetailView";
import store from "../store"

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div style={{height: "100%"}}>
                        <Route exact path="/" component={SmartSlides}/>
                        <Route exact path="/detail" component={CardDetailView}/>
                    </div>
                </Router>
            </Provider>
        )
    }
}