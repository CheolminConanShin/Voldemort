import React from 'react'
import {View} from 'react-view-pager'
import {NewCardInfoList} from '../CardList'

export default class NewCardView extends React.Component {
    render() {
        return (
            <View>
                <NewCardInfoList/>
            </View>
        )
    }
}