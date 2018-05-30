import React from 'react'
import {connect} from 'react-redux'
import { fetchStock, fetchSpecStock } from '../actions/stocks'
import StockChart from '../components/stockChart'
import GenDetails from '../components/genDetails'
import Button from '../components/button'

class MainPageContainer extends React.Component {
  state = {
    specStock: []
  }

  componentDidMount() {
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

  sortData = (stocks) => {
    let data = this.createTimeStampObj()
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
    let stocksArr = []
    stocks.forEach(stock => {
      let stockArr = []
      stockArr.push(stock["Meta Data"]["2. Symbol"])
      stocksArr.push(stockArr)
    })
    return stocksArr
  }

  toggle = (event) => {
    let box = document.getElementById("genDetailsBox")
    box.style.display = "block"
    let stockName = event.target.innerHTML
    let stocks = this.props.stocks
    let filteredStock = [stocks.find(stock => stock["Meta Data"]["2. Symbol"] === stockName)]
    let data = this.sortData(filteredStock)
    this.setState({
      specStock: data.reverse()
    })
  }

  render() {
    let stockSymbols = this.stockArr()
    let data = this.sortData(this.props.stocks)
    return (
      <div id="genDetails">
        <div id="genButtons">
          {stockSymbols.map(stock => {
            return <Button key={stock} toggle={this.toggle} stock={stock}/>
          })}
        </div>
        <StockChart data={data} />
        <GenDetails data={this.state.specStock}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    stocks: state.stocks,
    isLoading: state.isLoading,
  }
}

export default connect(mapStateToProps, {fetchStock, fetchSpecStock})(MainPageContainer)
