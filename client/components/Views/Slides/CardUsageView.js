import React from 'react'
import {View} from 'react-view-pager'
import Date from '../Date'
import {UsageCardList} from '../CardList'

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

export default class CardUsageView extends React.Component {
    render() {
        return (
            <View style={styles.container} className="view">
                <Date/>
                <UsageCardList cardInfo={this.props.cardInfo} openCalculator={this.props.openCalculator}/>
                <button style={styles.newCardButton}>카드 추가</button>
            </View>
        )
    }
}