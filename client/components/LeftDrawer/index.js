import React from 'react'

const styles = {
    position: {
        float: 'left'
    },
    size: {
        height: '100%',
        marginLeft: '15px'
    }
}

export default class LeftDrawer extends React.Component {
    render() {
        return (
            <img style={Object.assign({}, styles.position, styles.size)} src="./images/menu.svg"/>
        )
    }
}