import React from 'react'
import {View} from 'react-view-pager'
import CardList from './cardList'

export default class RegisterNewCardPresenter extends React.Component {
    render() {
        return (
            <View>
                <CardList/>
            </View>
        )
    }
}