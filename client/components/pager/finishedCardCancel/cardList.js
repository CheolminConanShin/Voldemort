import React from 'react'
import CancelableCard from './cancelableCard'
import UncancelableCard from './uncancelableCard'

export default class CardList extends React.Component {
    render() {
        return (
            <div>
                <CancelableCard cardName="국민 XXXX"/>
                <UncancelableCard cardName="국민 XXXX" dDay="29" cancelableDate="04.28"/>
                <UncancelableCard cardName="국민 XXXX" dDay="112" cancelableDate="07.28"/>
            </div>
        )
    }
}