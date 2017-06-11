import React from 'react'
import {connect} from 'react-redux'

import ProgressCardContainer from './progressCardContainer'
import SatisfiedCard from './satisfiedCard'

const mapStatesToProps = (state) => {
    return {
        cardInfo: state.cardInfoReducer.cardInfo,
    }
}

@connect(mapStatesToProps)
export default class CardListContainer extends React.Component {
    render() {
        let renderTags = [];
        for(var key in this.props.cardInfo) {
            var card = this.props.cardInfo[key]
            if(card == "") continue
            if(card.total <= card.used) {
                renderTags.push(<SatisfiedCard key={key} cardInfo={card} />)
            } else {
                renderTags.push(<ProgressCardContainer key={key} cardInfo={card}/>)
            }
        }
        return (
            <div>
                {renderTags}
            </div>
        )
    }
}