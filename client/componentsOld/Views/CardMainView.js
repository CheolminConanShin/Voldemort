import React from 'react'
import {ViewPager, Frame, Track, View} from 'react-view-pager'
import Navbar from '../Navbar'
import Tabs from '../Tabs'

import CardUsageView from '../../components/slide/pager/page/cardUsage/cardUsage'
import CardKeepView from '../../components/slide/pager/page/finishedCardCancel/finishedCardCancel'
import NewCardView from '../../components/slide/pager/page/registerNewCard/registerNewCard'
import Calculator from './Calculator/calculator'

import FirebaseConnector from '../../actions/firebase'


export default class CardUsageTrackView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
            cardInfo: {
                used: 0,
                total: 0
            },
            calculatorOn: false
        }

        this.database = FirebaseConnector.ref('userId_1/cardNumber_1')
        this.changeTabIndex = this.changeTabIndex.bind(this)
        this.openCalculator = this.openCalculator.bind(this)
        this.closeCalculator = this.closeCalculator.bind(this)
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
                                <CardUsagePage cardInfo={this.state.cardInfo} openCalculator={this.openCalculator}/>
                                <CardKeepView/>
                                <NewCardView/>
                            </Track>
                        </Frame>
                    </ViewPager>
                </div>
                <div>
                    {this.state.calculatorOn ? <Calculator cardInfo={this.state.cardInfo} closeCalculator={this.closeCalculator} /> : null}
                </div>
            </div>
        )
    }

    openCalculator(used, total) {
        this.setState({
            cardInfo: {
                used: used,
                total: total
            },
            calculatorOn: true
        })
    }

    closeCalculator() {
        this.setState({
            calculatorOn: false
        })
    }

    changeTabIndex(index) {
        this.setState({
            currentIndex: index
        })
    }

    componentDidMount() {
        const me = this
        this.database.on('value', snapshot => {
            const data = snapshot.val()
            me.setState({
                cardInfo: {
                    used: data.used,
                    total: data.total
                }
            })
        })
    }
}