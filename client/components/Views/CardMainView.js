import React from 'react'
import {ViewPager, Frame, Track, View} from 'react-view-pager'
import Navbar from '../Navbar'
import Tabs from '../Tabs'

import CardUsageView from './Slides/CardUsageView'
import CardKeepView from './Slides/CardKeepView'
import NewCardView from './Slides/NewCardView'
import Calculator from './Calculator/calculator'

import FirebaseConnector from '../../actions/firebase'


export default class CardUsageTrackView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
            cardInfo: {
                used: 0,
                limit: 0
            },
            calculatorOn: true
        }
        this.changeTabIndex = this.changeTabIndex.bind(this)
    }

    render() {
        return (
            <div>
                <div>
                    <Navbar title="볼드모트"/>
                    <Tabs ref="tabs" currentIndex={this.state.currentIndex} changeTabIndex={this.changeTabIndex}/>
                    <ViewPager tag="main">
                        <Frame className="frame">
                            <Track
                                ref={c => this.track = c}
                                viewsToShow={1}
                                currentView={this.state.currentIndex}
                                className="track"
                                onViewChange={currentIndicies => {
                                    this.setState({ currentIndex: currentIndicies[0] })
                                }}>
                                <CardUsageView cardInfo={this.state.cardInfo}/>
                                <CardKeepView/>
                                <NewCardView/>
                            </Track>
                        </Frame>
                    </ViewPager>
                </div>
                <div>
                    {this.state.calculatorOn ? <Calculator/> : null}
                </div>
            </div>
        )
    }

    changeTabIndex(index) {
        this.setState({
            currentIndex: index
        })
    }

    componentDidMount() {
        const me = this
        FirebaseConnector.ref('userId_1/cardNumber_1').once('value', snapshot => {
            const data = snapshot.val()
            me.setState({
                cardInfo: {
                    used: data.used,
                    limit: data.limit
                }
            })
        })
    }
}