import React from "react";
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HelloWorldComponent from "./HelloWorld";
import store from "../store"
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Route exact path="/" component={HelloWorldComponent}/>
                </Router>
            </Provider>
        )
    }
}