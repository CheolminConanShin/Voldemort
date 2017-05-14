import React from 'react'
import {ProgressCard, SatisfiedCard, CancelableCard, UncancelableCard, NewCardInfo} from './Card'

export class UsageCardList extends React.Component {
    render() {
        const leftAmount = this.props.cardUsage.limit - this.props.cardUsage.used
        const leftManwon = parseInt(leftAmount / 10000)
        const leftCheonwon = parseInt(leftAmount % 10000 / 1000)
        const leftBaekwon = parseInt(leftAmount % 1000 / 100)

        const manwonString = leftManwon > 0 ? " " + leftManwon + "만" : ""
        const cheonwonString = leftCheonwon > 0 ? " " + leftCheonwon + "천" : ""
        const baekwonString = leftBaekwon > 0 ? " " + leftBaekwon + "백" : ""


        const amountString = manwonString + cheonwonString + baekwonString + "원 부족"
        return (
            <div>
                <ProgressCard cardName="국민 XXXX" money={amountString}/>
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

export class NewCardInfoList extends React.Component {
    render() {
        return (
            <div>
                <NewCardInfo cardName="국민 XXXX" ppCard={true} annualFee="20만" voucher="신라 면세점 선불카드 20만원권 외 6가지" numberOfPlanner={2}/>
            </div>
        )
    }
}