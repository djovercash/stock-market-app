import React from 'react'
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts'
import Button from './button'
import GenDetails from './genDetails'



class Chart extends React.Component {

  render() {
    console.log(this.state)
    const data = [
        {name: 'Page A', googl: 4000, twtr: 2400, fb: 2400, aapl: 3000, msft: 1000},
        {name: 'Page B', googl: 3000, twtr: 1398, fb: 2210, aapl: 2500, msft: 2000},
        {name: 'Page C', googl: 2000, twtr: 9800, fb: 2290, aapl: 3800, msft: 2500},
        {name: 'Page D', googl: 2780, twtr: 3908, fb: 2000, aapl: 4900, msft: 2250},
        {name: 'Page E', googl: 1890, twtr: 4800, fb: 2181, aapl: 2200, msft: 2000},
        {name: 'Page F', googl: 2390, twtr: 3800, fb: 2500, aapl: 3000, msft: 1750},
        {name: 'Page G', googl: 3490, twtr: 4300, fb: 2100, aapl: 3230, msft: 2000},
    ];
    var stocks = ["GOOGL", "TWTR", "FB", "AAPL", "MSFT"]
    return (
      <div id="genDetails">
        <div id="genButtons">
          {stocks.map(stock => {
            return <Button name={stock}/>
          })}
        </div>
        <div id="chart">
          <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="googl" stroke="red" />
            <Line type="monotone" dataKey="twtr" stroke="green" />
            <Line type="monotone" dataKey="fb" stroke="blue" />
            <Line type="monotone" dataKey="aapl" stroke="yellow" />
            <Line type="monotone" dataKey="msft" stroke="purple" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Tooltip/>
            <Legend />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </div>
        <div id="genDetailsDiv">
          {stocks.map(stock => {
            return <GenDetails details={stock} />
          })}
        </div>
      </div>
    )
  }
}

export default Chart
