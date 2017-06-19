import React from 'react'

const styles = {
    row: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontSize: '16px',
        padding: '2px 0px'
    },
    date: {
        marginRight: 'auto'
    },
    currency: {
        color: '#575757',
        fontSize: '12px',
        marginTop: '3px',
        marginLeft: '2px'
    }
}

export default class HistoryItem extends React.Component {
    constructor(props) {
        super(props)

        this.deleteHandler = this.deleteHandler.bind(this)
    }

    render() {
        return (
            <div style={styles.row}>
                <span style={styles.date}>{this.props.usedDate}</span>
                <span>{this.props.leftAmount}</span>
                <span style={styles.currency}>원</span>
                <button onClick={this.deleteHandler}><img src="./images/delete.svg"/></button>
            </div>
        )
    }

    deleteHandler() {
        console.log(this.props.date)
    }
}