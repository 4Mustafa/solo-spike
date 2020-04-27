import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
const request = require('request');
var keyword_extractor = require("keyword-extractor");

class Test extends Component {
    state = {
        newLink: [],
        keyword: [],
    }
    componentDidMount() {
        request(`https://stackoverflow.com/`, function (error, response, body) {
            console.error('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            keyword_extractor.extract(body, {
                language: "english",
                remove_digits: true,
                return_changed_case: true,
                remove_duplicates: false

            });

            console.log(body);


        });


    }





    handleSubmit = () => {

    }

    handleChange = (event) => {
        this.setState({
            newLink: event.target.value,
        });





        console.log(event.target.value);
        console.log('state is', this.state.newLink);


    }








    render() {
        return (
            <div>
                <h1>TESTTTTT </h1>
                <input type='text' value={this.state.newLink} onChange={this.handleChange} />
                <button onClick={this.handleSubmit} type='submit' value='update link'>SUBMIT</button>
                {this.props.reduxState.sites}

            </div>
        );
    }

}



const putPropsOnReduxStore = reduxState => ({
    reduxState
});

export default connect(putPropsOnReduxStore)(Test);
