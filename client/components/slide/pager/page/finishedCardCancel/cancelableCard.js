import React from 'react'

const styles = {
    container: {
        margin: '5vw',
        padding: '5vw',
        boxShadow: '0px 1vw 4vw 0px lightgrey',
    },
    cardName: {
        fontSize: '4.5vw',
        textAlign: 'left'
    },
    cancel: {
        fontSize: '5vw',
        fontWeight: 'bold',
        color: '#f37979',
        textAlign: 'right',
        marginRight: '3%'
    },
    call: {
        width: '25%',
        fontSize: '3.5vw',
        color: '#f37979',
        textAlign: 'center',
        border: '3px solid',
        borderRadius: '100px',
        marginTop: '3%',
        marginLeft: '70%',
        padding: '22px'
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
