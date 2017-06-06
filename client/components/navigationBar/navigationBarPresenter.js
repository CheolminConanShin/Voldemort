import React from 'react'
import Header from './headerPresenter'
import ArrowBack from "./ArrowBack";

const styles = {
    size: {
        position: 'fixed',
        width: '100%',
        height: "10vw",
        paddingTop: "20px",
    }
}

export default class NavigationBar extends React.Component {
    render() {
        return (
            <div style={styles.size}>
                {this.props.arrow ? <ArrowBack/> : null}
                <Header title={this.props.title}/>
            </div>
        )
    }
}