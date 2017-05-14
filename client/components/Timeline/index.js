import React from 'react'
import styles from './Timeline.css'


class TimelineEvent extends React.Component{
    render(){
        return (
            <div className={styles.timelineArticle}>
                <div className={styles.metaDate}>
                    {this.props.event.date}
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.content}>
                        {this.props.event.title}
                    </div>
                    <div className={styles.control}></div>
                </div>
            </div>
        )
    }
}

export default class Timeline extends React.Component {
    render() {
        return (
            <div className={styles.timeline}>
                <div className={styles.centerLine}></div>
                <div className={styles.timelineContent}>
                    <TimelineEvent event={{date:'17.05.10', title:'카드 수령'}}/>
                    <TimelineEvent event={{date:'17.05.15', title:'실적 부족'}}/>
                    <TimelineEvent event={{date:'17.05.16', title:'5만원 입금예정'}}/>
                    <TimelineEvent event={{date:'17.11.01', title:'해지가능'}}/>
                </div>
            </div>
        )
    }
}
