import React from 'react'

const styles = {
    size: {
        float: 'left',
        marginLeft: '1.2vw',
        marginRight: '1.2vw'
    },
    font: {
        fontSize: '2vh',
        textAlign: 'center'
    }
}

export default class TabPresenter extends React.Component {
    constructor(props) {
        super(props)

        this.getActiveOrInactiveTabClass = this.getActiveOrInactiveTabClass.bind(this)
    }

    render() {
        const style = Object.assign({}, styles.size, styles.font, styles.border, {width: this.props.width});

        return (
            <div className={this.getActiveOrInactiveTabClass()} onClick={this.props.changeIndex} style={style}>{this.props.text}</div>
        )
    }

    getActiveOrInactiveTabClass() {
        if(this.props.isActive) {
            return "tab" + this.props.index + " active"
        } else {
            return "tab" + this.props.index + " inactive"
        }
    }
}

