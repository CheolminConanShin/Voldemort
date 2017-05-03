import React from 'react'

const styles = {
    size: {
        float: 'left',
        marginLeft: '1.15vw',
        marginRight: '1.15vw'
    },
    font: {
        fontSize: '2vh',
        textAlign: 'center',
        color: '#1d1d1d'
    }
}

export default class Tab extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            classes: this.props.classes
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    render() {
        return (
            <div className={this.state.classes} onClick={this.clickHandler} style={Object.assign({}, styles.size, styles.font, styles.border, {width: this.props.width})}>{this.props.text}</div>
        )
    }

    componentWillUpdate() {
    }

    componentWillMount() {
    }

    clickHandler() {
        this.props.clickHandler(this.props.index)
    }
}
