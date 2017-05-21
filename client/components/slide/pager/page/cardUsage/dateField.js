import React from 'react'
import Time from 'react-time'

const styles = {
    container: {
        textAlign: 'center',
        fontSize: '3vh',
        color: '#777777',
        marginBottom: '2vh'
    }
}


export default class Date extends React.Component{
    render() {
        const today = new Date()
        return (
            <div style={styles.container}>
                <Time value={today} format="YYYY.MM"/>
            </div>
        )
    }
}