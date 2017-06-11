import React from 'react'

const styles = {
    container: {
        margin: '5vw',
        padding: '5vw',
        boxShadow: '0px 1vw 4vw 0px lightgrey',
    },
    cardName: {
        fontSize: '17px',
        textAlign: 'left'
    },
    cancel: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#f37979',
        textAlign: 'right',
        marginRight: '3%'
    },
    call: {
        width: '25%',
        fontSize: '13px',
        color: '#f37979',
        textAlign: 'center',
        border: '1px solid',
        borderRadius: '100px',
        marginTop: '3%',
        marginLeft: '70%',
        padding: '7px'
    }
}

export default class CancelableCard extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.cardName}>
                    {this.props.cardName}
                </div>
                <div style={styles.cancel}>
                    해지가능
                </div>
                <div style={styles.call}>
                    전화하기
                </div>
            </div>
        )
    }
}
