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

export default class ArrowBack extends React.Component {
    render() {
        return (
            <img style={Object.assign({}, styles.position, styles.size)} src="./images/arrow_back.svg"/>
        )
    }
}