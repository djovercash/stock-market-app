import React from 'react'
import {connect} from 'react-redux'
import { fetchStock } from '../actions/stocks'
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts'
import Button from './button'
import GenDetails from './genDetails'

class Chart extends React.Component {

  componentWillMount() {
    let stocks = ["ADBE", "CRM", "ORCL", "ATVI", "MSFT"]
    stocks.forEach(stock => {
      this.props.fetchStock(stock)
    })
  }

  createTimeStampObj = () => {
    let timeStampObjArr = []
    for (let i = 0; i < 20; i++) {
      let timeStampObj = {}
      timeStampObjArr.push(timeStampObj)
    }
    return timeStampObjArr
  }

  findStockKeyArr = (stockObj) => {
    let keyArr = []
    let keyAndObjArr = []
    for (var key in stockObj) {
      keyArr.push(key)
    }
    for (let i = 0; i < 20; i++) {
      let timeStampObj = {}
      timeStampObj["name"] = keyArr[i]
      keyAndObjArr.push(timeStampObj)
    }
    return keyAndObjArr
  }

  createTimeStampData = (timeObj, keyArr, company, dataArr) => {
    for(let i = 0; i < 20; i++) {
      let time = keyArr[i].name.split(" ")
      dataArr[i]["name"] = time[1].slice(0, 5)
      dataArr[i][`${company}`] = parseInt(timeObj[`${keyArr[i].name}`]["4. close"])
    }
    return dataArr
  }

  sortData = () => {
    let data = this.createTimeStampObj()
    let stocks = this.props.stocks
    stocks.forEach(stock => {
      let timeStamp = stock["Time Series (5min)"]
      let keyArr = this.findStockKeyArr(timeStamp)
      let company = stock["Meta Data"]["2. Symbol"]
      data = this.createTimeStampData(timeStamp, keyArr, company, data)
    })
    return data.reverse()
  }

  stockArr = () => {
    let stocks = this.props.stocks
    let stockArr = []
    stocks.forEach(stock => {
      stockArr.push(stock["Meta Data"]["2. Symbol"])
    })
    return stockArr
  }

  render() {
    // const data = [
    //     {name: 'Page A', googl: 4000, twtr: 2400, fb: 2400, aapl: 3000, msft: 1000},
    //     {name: 'Page B', googl: 3000, twtr: 1398, fb: 2210, aapl: 2500, msft: 2000},
    //     {name: 'Page C', googl: 2000, twtr: 9800, fb: 2290, aapl: 3800, msft: 2500},
    //     {name: 'Page D', googl: 2780, twtr: 3908, fb: 2000, aapl: 4900, msft: 2250},
    //     {name: 'Page E', googl: 1890, twtr: 4800, fb: 2181, aapl: 2200, msft: 2000},
    //     {name: 'Page F', googl: 2390, twtr: 3800, fb: 2500, aapl: 3000, msft: 1750},
    //     {name: 'Page G', googl: 3490, twtr: 4300, fb: 2100, aapl: 3230, msft: 2000},
    // ];
    console.log(this.props.stocks)
    let data = this.sortData()
    let stocks = this.stockArr()
    return (
      <div id="genDetails">
        <div id="genButtons">
          {stocks.map(stock => {
            return <Button key={stock} name={stock}/>
          })}
        </div>
        <div id="chart">
          <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="ADBE" stroke="red" />
            <Line type="monotone" dataKey="CRM" stroke="green" />
            <Line type="monotone" dataKey="ORCL" stroke="blue" />
            <Line type="monotone" dataKey="ATVI" stroke="yellow" />
            <Line type="monotone" dataKey="MSFT" stroke="purple" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Tooltip/>
            <Legend />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </div>
        <div id="genDetailsDiv">
          {stocks.map(stock => {
            return <GenDetails key={stock} details={stock} />
          })}
        </div>
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

export default connect(mapStateToProps, {fetchStock})(Chart)
