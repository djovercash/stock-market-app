import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './App.css';
import { fetchStock } from './actions/stocks'
import {connect} from 'react-redux'
import Chart from './components/stockChart'

class App extends Component {
  componentDidMount() {
    let stocks = ["GOOGL", "TWTR", "FB", "AAPL", "MSFT"]
    stocks.forEach(stock => {
      this.props.fetchStock(stock)
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>Social Stock</h1>
        <Chart/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stocks: state.stocks,
    isLoading: state.isLoading
  }
}

export default withRouter(connect(mapStateToProps, {fetchStock})(App));
