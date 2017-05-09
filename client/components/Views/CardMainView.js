import React from 'react'
import {ViewPager, Frame, Track, View} from 'react-view-pager'
import Navbar from '../Navbar'
import Tabs from '../Tabs'
import Date from '../Date'
import CardList from '../CardList'

export default class CardUsageTrackView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0
        }
        this.changeTabIndex = this.changeTabIndex.bind(this)
    }

    render() {
        return (
            <div>
                <Navbar/>
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
                            <View className="view">
                                <Date/>
                                <CardList/>
                            </View>
                            <View className="view">2</View>
                            <View className="view">3</View>
                        </Track>
                    </Frame>
                </ViewPager>
            </div>
        )
    }

    changeTabIndex(index) {
        this.setState({
            currentIndex: index
        })
    }
}