import React from 'react'
import Tab from './tab/tabContainer'

const styles = {
    size: {
        paddingLeft: '4.2vw',
        paddingRight: '4.2vw',
        marginBottom: '24px',
        boxShadow: 'grey 0px 13px 10px -10px'
    },
    underLine2Parts: {
        width: '38%',
        transition: '.3s ease-in-out',
        borderTop: '2px solid #3f6072'
    },
    underLine3Parts: {
        width: '30%',
        transition: '.3s ease-in-out',
        borderTop: '2px solid #3f6072'
    }
}

export class TabsPresenterForSlider extends React.Component {
    render() {
        return (
            <div style={styles.size}>
                <Tab index={0} text="사용중" width="25.1vw"/>
                <Tab index={1} text="유지" width="34vw"/>
                <Tab index={2} text="신규가능" width="25.1vw"/>
                <hr style={styles.underLine3Parts} className="hr3"/>
            </div>
        )
    }
}

export class TabsPresenterForDetail extends React.Component {
    render() {
        return (
            <div style={styles.size}>
                <Tab index={0} text="사용내역" width="43vw"/>
                <Tab index={1} text="기본정보" width="43vw"/>
                <hr style={styles.underLine2Parts} className="hr2"/>
            </div>
        )
    }
}