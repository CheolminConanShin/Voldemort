import React from "react";
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HelloWorldComponent from "./HelloWorld";
import CardUsageTrackView from './Views/CardUsageTrackView'
import store from "../store"
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div style={{height: "100%"}}>
                        <Route exact path="/" component={CardUsageTrackView}/>
                        <Route exact path="/sampleReduxComponent" component={HelloWorldComponent}/>
                    </div>
                </Router>
            </Provider>
        )
    }
}