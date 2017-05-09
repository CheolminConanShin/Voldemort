import React from 'react'
import {ProgressCard, SatisfiedCard} from './Card'

export default class CardList extends React.Component {
    render() {
        return (
            <div>
                <ProgressCard cardName="국민 XXXX" money="12만 6천원 부족"/>
                <SatisfiedCard cardName="국민 XXXX"/>
            </div>
        )
    }
}