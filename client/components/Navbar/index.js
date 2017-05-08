import React from 'react'
import Header from './Header'

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
                <Header title="볼드모트"/>
            </div>
        )
    }
}