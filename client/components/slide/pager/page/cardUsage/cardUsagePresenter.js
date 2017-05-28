import React from "react";
import {View} from "react-view-pager";
import DateField from "./dateField";
import CardList from "./cardListContainer";

const styles = {
    container: {
        textAlign: 'center'
    },
    newCardButton: {
        color: '#777777',
        fontSize: '4vw',
        border: '3px solid #777777',
        borderRadius: '100px',
        backgroundColor: 'white',
        padding: '25px 75px',
        marginTop: '35px'
    }
}

export default class CardUsagePresenter extends React.Component {
    render() {
        return (
            <View style={styles.container} className="view">
                <DateField/>
                <CardList/>
                <button style={styles.newCardButton}>카드 추가</button>
            </View>
        )
    }
}