import React from 'react'
import Navbar from "../Navbar/index";
import CardInfo from "../CardInfo/index";
import Timeline from "../Timeline/index";

export default class CardDetailView extends React.Component {
    render() {
        return (
            <div>
                <Navbar title="KB국민 파인테크(1*2*)" arrow="back"/>
                <CardInfo/>
                <Timeline/>
            </div>
        )
    }
}