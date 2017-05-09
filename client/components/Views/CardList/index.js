import React from 'react'
import {ProgressCard, SatisfiedCard, CancelableCard, UncancelableCard} from './Card'

export class UsageCardList extends React.Component {
    render() {
        return (
            <div>
                <ProgressCard cardName="국민 XXXX" money="12만 6천원 부족"/>
                <SatisfiedCard cardName="국민 XXXX"/>
            </div>
        )
    }
}

export class KeepCardList extends React.Component {
    render() {
        return (
            <div>
                <CancelableCard cardName="국민 XXXX"/>
                <UncancelableCard cardName="국민 XXXX" dDay="29일 남음" cancelableDate="해지가능일 : 04.28"/>
                <UncancelableCard cardName="국민 XXXX" dDay="112일 남음" cancelableDate="해지가능일 : 07.28"/>
            </div>
        )
    }
}