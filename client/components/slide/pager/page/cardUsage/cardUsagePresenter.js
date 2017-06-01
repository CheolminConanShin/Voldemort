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
        fontSize: '13px',
        border: '1px solid #777777',
        borderRadius: '100px',
        backgroundColor: 'white',
        padding: '10px 28px',
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