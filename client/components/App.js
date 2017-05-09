import React from "react";
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HelloWorldComponent from "./HelloWorld";
import CardMainView from './Views/CardMainView'
import store from "../store"
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div style={{height: "100%"}}>
                        <Route exact path="/" component={CardMainView}/>
                        <Route exact path="/sampleReduxComponent" component={HelloWorldComponent}/>
                    </div>
                </Router>
            </Provider>
        )
    }
}