import React from 'react'
import history from '../../components/history'

const styles = {
    position: {
        float: 'left'
    },
    size: {
        marginLeft: '4vw',
        marginTop: '1vw'
    }
}

export default class ArrowBack extends React.Component {
    constructor(props) {
        super(props)

        this.navigateBack = this.navigateBack.bind(this)
    }

    navigateBack() {
        history.goBack()
    }

    render() {
        return (
            <img onClick={this.navigateBack} style={Object.assign({}, styles.position, styles.size)} src="./images/back.svg"/>
        )
    }
}