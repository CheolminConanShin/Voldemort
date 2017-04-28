import React from 'react'
import LeftDrawer from '../LeftDrawer'

const styles = {
    title: {
        fontSize: "2.5vh",
        textAlign: "center",
        paddingRight: '10vw'
    },
    header: {
        height: "21.8%"
    }
}

export default class Header extends React.Component {
    render() {
        return (
            <div style={styles.header}>
                <LeftDrawer/>
                <div style={styles.title}>볼드모트</div>
            </div>
        )
    }
}