import React from 'react'
import Tab from '../../smart/tab/tab'

const styles = {
    size: {
        position: 'relative',
        paddingTop: '17vw',
        paddingLeft: '4.2vw',
        paddingRight: '4.2vw',
        marginBottom: '2vh',
        boxShadow: '0px -1vw 4vw 2vw lightgrey'
    },
    underLine: {
        width: '30%',
        transition: '.3s ease-in-out',
        borderTop: '6px solid #7984f3'
    }
}

export default class Tabs extends React.Component {
    render() {
        return (
            <div style={styles.size}>
                <Tab index={1} text="사용중" width="25.1vw"/>
                <Tab index={2} text="유지" width="32vw"/>
                <Tab index={3} text="신규가능" width="25.1vw"/>
                <hr style={styles.underLine}/>
            </div>
        )
    }
}