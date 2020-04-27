import React, { Component } from 'react';
import { connect } from 'react-redux';


class TheList extends Component {

    componentDidMount() {
        const action = { type: 'GET_LIST' };
        this.props.dispatch(action);

    }

    render() {
        return (
            <table className="List">
                <thead>
                </thead>
                <tbody>
                    {this.props.reduxState.wordList}
                </tbody>
            </table>
        );
    }
}

// Makes our reducers available in our component
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(TheList);
