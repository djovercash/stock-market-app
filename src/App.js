import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './App.css';
import { fetchStock } from './actions/stocks'
import {connect} from 'react-redux'
import Chart from './components/stockChart'

class App extends Component {
  // componentDidMount() {
  //   let stocks = ["ADBE", "CRM", "ORCL", "ATVI", "MSFT"]
  //   stocks.forEach(stock => {
  //     this.props.fetchStock(stock)
  //   })
  // }
  //
  // findStockKeyArr = (stockObj) => {
  //   let keyArr = []
  //   let keyAndObjArr = []
  //   for (var key in stockObj) {
  //     keyArr.push(key)
  //   }
  //   for (let i = 0; i < 20; i++) {
  //     let timeStampObj = {}
  //     timeStampObj["name"] = keyArr[i]
  //     keyAndObjArr.push(timeStampObj)
  //   }
  //   return keyAndObjArr
  // }
  //
  // createTimeStampObj = () => {
  //   let timeStampObjArr = []
  //   for (let i = 0; i < 20; i++) {
  //     let timeStampObj = {}
  //     timeStampObjArr.push(timeStampObj)
  //   }
  //   return timeStampObjArr
  // }
  //
  // createTimeStampData = (timeObj, keyArr, company, dataArr) => {
  //   for(let i = 0; i < 20; i++) {
  //     dataArr[i]["name"] = keyArr[i].name
  //     dataArr[i][`${company}`] = parseInt(timeObj[`${keyArr[i].name}`]["4. close"])
  //   }
  //   return dataArr
  // }


  render() {
    // let stocks = this.props.stocks
    // let data = this.createTimeStampObj()
    // stocks.forEach(stock => {
    //   let timeStamp = stock["Time Series (5min)"]
    //   let keyArr = this.findStockKeyArr(timeStamp)
    //   let company = stock["Meta Data"]["2. Symbol"]
    //   data = this.createTimeStampData(timeStamp, keyArr, company, data)
    // })
      // for(let i = 0; i < 10; i++) {
      //   let keyObj = keyArr[i]
      //   keyObj[`${company}`] = timeStamp[`${keyObj.name}`]["4. close"]
      //   console.log(keyObj)
      //   console.log(keyArr)
// for (var prop in obj) {
//       if (obj.hasOwnProperty(prop)) {
//         var innerObj = {};
//         innerObj[prop] = obj[prop];
//         arr.push(innerObj)
//       }
//     }

    // console.log(arr);
    return (
      <div className="App">
        <h1>Social Stock</h1>
        <Chart />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    stocks: state.stocks,
    isLoading: state.isLoading
  }
}

export default withRouter(connect(mapStateToProps, {fetchStock})(App));
