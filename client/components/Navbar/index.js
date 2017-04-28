import React from 'react'
import Header from './Header'

const styles = {
    size: {
        height: "15.4%",
        paddingTop: "20px"
    }
}

export default class Navbar extends React.Component {
    render() {
        return (
            <div style={styles.size}>
                <Header/>
            </div>
        )
    }
}