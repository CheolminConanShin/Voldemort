import React from 'react'

const styles = {
    title: {
        fontSize: "18px",
        textAlign: "center",
        width: "100%",
        lineHeight: '20px'
    }
}

export default class Header extends React.Component {
    render() {
        return (
               <div id="header-title" style={styles.title}>{this.props.title}</div>
        )
    }
}