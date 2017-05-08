import React from 'react'

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
        return (
            <div style={styles.container}>
                2017. 04
            </div>
        )
    }
}