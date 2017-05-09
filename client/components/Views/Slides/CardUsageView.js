import React from 'react'
import {View} from 'react-view-pager'
import Date from '../Date'
import CardList from '../CardList'

export default class CardUsageView extends React.Component {
    render() {
        return (
            <View className="view">
                <Date/>
                <CardList/>
            </View>
        )
    }
}