import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { fetchStock } from './actions/stocks'
import {connect} from 'react-redux'

class App extends Component {
  componentDidMount() {
  this.props.fetchStock("GOOGL")
}

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stocks: state.stocks,
    loggedIn: state.loggedIn
  }
}

export default withRouter(connect(mapStateToProps, {fetchStock})(App));
