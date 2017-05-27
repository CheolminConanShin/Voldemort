import React from 'react'

const styles = {
    size: {
        float: 'left',
        marginLeft: '1.2vw',
        marginRight: '1.2vw'
    },
    font: {
        fontSize: '2vh',
        textAlign: 'center',
        color: '#1d1d1d'
    }
}

export default class TabPresenter extends React.Component {
    render() {
        const style = Object.assign({}, styles.size, styles.font, styles.border, {width: this.props.width});

        return (
            <div className={this.props.classNames} onClick={this.props.setCurrentIndex} style={style}>{this.props.text}</div>
        )
    }
}

