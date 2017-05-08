import React from 'react'
import LeftDrawer from '../LeftDrawer'
import ArrowBack from "../LeftDrawer/ArrowBack";

const styles = {
    title: {
        position: "absolute",
        fontSize: "2.5vh",
        textAlign: "center",
        width: "100%"
    },
    header: {
        height: "21.8%"
    }
}

export default class Header extends React.Component {
    render() {
        return (
            <div style={styles.header}>
                <div style={styles.title}>{this.props.title}</div>
                {this.renderDrawer()}
            </div>
        )
    }

    renderDrawer() {
        if(this.props.arrow){
            if(this.props.arrow == 'back'){
                return <ArrowBack/>
            }
        }else{
            return <LeftDrawer/>
        }
    }
}