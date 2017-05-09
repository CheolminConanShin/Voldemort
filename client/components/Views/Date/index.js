import React from 'react'

const styles = {
    container: {
        textAlign: 'center',
        fontSize: '30px',
        color: '#777777',
        marginBottom: '40px'
    }
}

export default class Date extends React.Component{
    render() {
        return (
            <div style={styles.container}>
                2017. 04
            </div>
        )
    }
}