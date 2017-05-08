import React from 'react'
import Header from './Header'
import CardInfo from "../CardInfo/index";

const styles = {
    size: {
        height: "60vw",
        paddingTop: "3vw",
        marginBottom: '50px',
        boxShadow: '0px 2vw 4vw 0px lightgrey'
    }
}

export default class Cardbar extends React.Component {
    render() {
        return (
            <div style={styles.size}>
                <Header title="KB국민 파인테크(1*2*)" arrow="back"/>
                <CardInfo/>
            </div>
        )
    }
}