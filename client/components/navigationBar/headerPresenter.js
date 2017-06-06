import React from 'react'

const styles = {
    title: {
        fontSize: "2.5vh",
        textAlign: "center",
        width: "100%",
        lineHeight: '4vh'
    }
}

export default class Header extends React.Component {
    render() {
        return (
               <div id="header-title" style={styles.title}>{this.props.title}</div>
        )
    }
}