import React from 'react'

const styles = {
    buttons: {
        backgroundColor: 'white',
        width: '25vw',
        height: '58px',
        fontSize: '18px',
        textAlign: 'center'
    },
    eraseArrow: {
        width: '9vw'
    },
    empty: {
        backgroundColor: '#bcbcbc',
        width: '25vw',
        height: '58px',
    },
    enter: {
        backgroundColor: '#7984f3',
        color: 'white',
        fontSize: '18px',
        textAlign: 'center'
    }
}

export default class NumbersPresenter extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                <tr>
                    <td onClick={this.props.buttonHandler} style={styles.buttons}>1</td>
                    <td onClick={this.props.buttonHandler} style={styles.buttons}>2</td>
                    <td onClick={this.props.buttonHandler} style={styles.buttons}>3</td>
                    <td onClick={this.props.eraseHandler} style={styles.buttons}><img style={styles.eraseArrow} src="./images/shape.svg"/></td>
                </tr>
                <tr>
                    <td onClick={this.props.buttonHandler} style={styles.buttons}>4</td>
                    <td onClick={this.props.buttonHandler} style={styles.buttons}>5</td>
                    <td onClick={this.props.buttonHandler} style={styles.buttons}>6</td>
                    <td style={styles.buttons}>+/-</td>
                </tr>
                <tr>
                    <td onClick={this.props.buttonHandler} style={styles.buttons}>7</td>
                    <td onClick={this.props.buttonHandler} style={styles.buttons}>8</td>
                    <td onClick={this.props.buttonHandler} style={styles.buttons}>9</td>
                    <td onClick={this.props.saveHandler} style={styles.enter} rowSpan="2">완료</td>
                </tr>
                <tr>
                    <td style={styles.empty}></td>
                    <td onClick={this.props.buttonHandler} style={styles.buttons}>0</td>
                    <td style={styles.empty}></td>
                </tr>
                </tbody>
            </table>
        )
    }
}