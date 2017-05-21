import React from 'react'
import {connect} from 'react-redux'
import {View} from 'react-view-pager'
import Date from './dateField'
import CardList from './cardList'

const styles = {
    container: {
        textAlign: 'center'
    },
    newCardButton: {
        color: '#777777',
        fontSize: '4vw',
        border: '3px solid #777777',
        borderRadius: '100px',
        backgroundColor: 'white',
        padding: '25px 75px',
        marginTop: '35px'
    }
}

export default class CardUsagePresenter extends React.Component {
    render() {
        return (
            <View style={styles.container} className="view">
                <Date/>
                <CardList/>
                <button style={styles.newCardButton}>카드 추가</button>
            </View>
        )
    }
}