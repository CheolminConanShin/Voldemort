import React from 'react'
import Header from './Header'
import Tabs from './Tabs'

const styles = {
    size: {
        height: "20vw",
        paddingTop: "20px",
        marginBottom: '50px',
        boxShadow: '0px 2vw 4vw 0px lightgrey'
    }
}

export default class Navbar extends React.Component {
    render() {
        return (
            <div style={styles.size}>
                <Header/>
                <Tabs/>
            </div>
        )
    }
}