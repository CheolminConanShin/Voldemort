import React from 'react'
import Header from './Header'
import ArrowBack from "../LeftDrawer/ArrowBack";
import LeftDrawer from "../LeftDrawer/index";

const styles = {
    size: {
        position: 'fixed',
        width: '100%',
        height: "10vw",
        paddingTop: "20px",
    }
}

export default class Navbar extends React.Component {
    render() {
        return (
            <div style={styles.size}>
                {this.renderDrawer()}
                <Header title={this.props.title}/>
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