import React from 'react'
import Tab from './Tab'

const styles = {
    size: {
        position: 'relative',
        paddingTop: '17vw',
        paddingLeft: '4.2vw',
        paddingRight: '4.2vw',
        marginBottom: '50px',
        boxShadow: '0px -1vw 4vw 2vw lightgrey'
    },
    underLine: {
        width: '30%',
        transition: '.3s ease-in-out',
        borderTop: '6px solid #7984f3'
    }
}

export default class Tabs extends React.Component {
    constructor(props) {
        super(props)

        this.changeTabIndex = this.props.changeTabIndex
        this.setTabActive = this.setTabActive.bind(this)
    }

    render() {
        return (
            <div style={styles.size}>
                <Tab ref="tab1" index={0} text="사용중" width="25.5vw" clickHandler={this.changeTabIndex} classes='tabOne active'/>
                <Tab ref="tab2" index={1} text="유지" width="33.7vw" clickHandler={this.changeTabIndex} classes='tabTwo'/>
                <Tab ref="tab3" index={2} text="신규가능" width="25.5vw" clickHandler={this.changeTabIndex} classes='tabThree'/>
                <hr style={styles.underLine}/>
            </div>
        )
    }

    componentDidUpdate() {
        this.setTabActive(this.props.currentIndex)
    }

    setTabActive(index) {
        this.refs.tab1.state.classes = 'tabOne'
        this.refs.tab2.state.classes = 'tabTwo'
        this.refs.tab3.state.classes = 'tabThree'
        switch(index) {
            case 0:
                this.refs.tab1.state.classes = 'tabOne active'
                break;
            case 1:
                this.refs.tab2.state.classes = 'tabTwo active'
                break;
            case 2:
                this.refs.tab3.state.classes = 'tabThree active'
                break;
        }
        this.refs.tab1.forceUpdate()
        this.refs.tab2.forceUpdate()
        this.refs.tab3.forceUpdate()
    }
}