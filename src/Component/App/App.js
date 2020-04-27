import React, { Component } from 'react';
import './App.css';
import TheList from '../TheList/TheList'
class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h3>List of key words</h3>
        <TheList />
      </div>
    );
  }
}

export default App;
