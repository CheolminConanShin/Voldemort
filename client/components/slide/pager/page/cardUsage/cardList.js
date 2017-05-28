import React from 'react'
import {connect} from 'react-redux'

import ProgressCardContainer from './progressCardContainer'
import SatisfiedCard from './satisfiedCard'

class CardList extends React.Component {
    render() {
        return (
            <div>
                <ProgressCardContainer cardName="국민 XXXX" cardInfo={this.props.cardInfo} openCalculator={this.props.openCalculator}/>
                <SatisfiedCard cardName="국민 XXXX" depositDate="05.17"/>
            </div>
        )
    }
}

const mapStatesToProps = (state) => {
    return {
        cardInfo: state.cardInfoReducer.cardInfo,
    }
}

export default connect(mapStatesToProps)(CardList)