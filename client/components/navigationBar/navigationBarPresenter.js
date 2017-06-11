import React from 'react'
import Header from './headerPresenter'
import ArrowBack from "./ArrowBack";
import Pencil from './pencil'

const styles = {
    size: {
        width: '100%',
        padding: '17px 0px',
        paddingTop: "20px",
    }
}

export default class NavigationBar extends React.Component {
    render() {
        return (
            <div style={styles.size}>
                {this.props.arrow ? <ArrowBack/> : null}
                {this.props.pencil ? <Pencil/> : null}
                <Header title={this.props.title}/>
            </div>
        )
    }
}