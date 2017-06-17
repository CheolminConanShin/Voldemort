import React from 'react'
import Time from 'react-time'

const styles = {
    container: {
        textAlign: 'center',
        fontSize: '14px',
        color: '#777777',
        marginBottom: '16px'
    }
}


export default class DateField extends React.Component{
    render() {
        const today = new Date()
        return (
            <div style={styles.container}>
                <Time value={today} format="YYYY.MM"/>
            </div>
        )
    }
}