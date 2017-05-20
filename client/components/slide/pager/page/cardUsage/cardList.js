import React from 'react'
import ProgressCard from './progressCard'
import SatisfiedCard from './satisfiedCard'

export default class CardList extends React.Component {
    render() {
        return (
            <div>
                <ProgressCard cardName="국민 XXXX" cardInfo={this.props.cardInfo} openCalculator={this.props.openCalculator}/>
                <SatisfiedCard cardName="국민 XXXX"/>
            </div>
        )
    }
}