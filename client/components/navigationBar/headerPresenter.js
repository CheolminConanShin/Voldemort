import React from 'react'

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
                <div id="header-title" style={styles.title}>{this.props.title}</div>
            </div>
        )
    }
}