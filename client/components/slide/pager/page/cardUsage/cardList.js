import React from 'react'
import {connect} from 'react-redux'

import ProgressCard from './progressCard'
import SatisfiedCard from './satisfiedCard'

class CardList extends React.Component {
    render() {
        return (
            <div>
                <ProgressCard cardName="국민 XXXX" cardInfo={this.props.cardInfo} openCalculator={this.props.openCalculator}/>
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