import React from 'react'
import {connect} from 'react-redux'
import {sampleAction} from '../../actions'

class HelloWorldComponent extends React.Component {
    render() {
        return (
            <div onClick={this.props.changeProps}>{this.props.value}</div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        value: state.value
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeProps: () => dispatch(sampleAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorldComponent);