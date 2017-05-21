import React from 'react'

const styles = {
    inputBox: {
        display: 'inline-block',
        width: '35%'
    }
}

export default class UsageField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usage: this.props.usage
        }
    }

    render() {
        return (
            <span style={styles.inputBox}>{this.state.usage}</span>
        )
    }
}