import React from 'react'
import Navbar from '../Navbar'
import Date from '../Date'
import CardList from '../CardList'

export default class CardUsageTrackView extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Date/>
                <CardList/>
            </div>
        )
    }
}