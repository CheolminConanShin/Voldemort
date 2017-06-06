import React from 'react'

const styles = {
    position: {
        float: 'right'
    },
    size: {
        marginRight: '4vw',
        marginTop: '1vw'
    }
}

export default class ArrowBack extends React.Component {
    render() {
        return (
            <img style={Object.assign({}, styles.position, styles.size)} src="./images/pencil.svg"/>
        )
    }
}