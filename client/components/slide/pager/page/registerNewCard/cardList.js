import React from 'react'
import NewCard from './newCard'

export default class CardList extends React.Component {
    render() {
        return (
            <div>
                <NewCard cardName="국민 XXXX" ppCard={true} annualFee="20만" voucher="신라 면세점 선불카드 20만원권 외 6가지" numberOfPlanner={2}/>
            </div>
        )
    }
}