import React from 'react'

const styles = {
    position: {
        float: 'left'
    },
    size: {
        height: '4vw',
        marginLeft: '4vw',
        marginTop: '1vw'
    }
}

export default class LeftDrawer extends React.Component {
    render() {
        return (
            <img style={Object.assign({}, styles.position, styles.size)} src="./images/menu.svg"/>
        )
    }
}