import React from 'react'
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts'

const Chart = (props) => {

  return (
    <div id="chart">
      <LineChart width={600} height={300} data={props.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="ADBE" stroke="red" />
        <Line type="monotone" dataKey="CRM" stroke="green" />
        <Line type="monotone" dataKey="ORCL" stroke="blue" />
        <Line type="monotone" dataKey="ATVI" stroke="orange" />
        <Line type="monotone" dataKey="MSFT" stroke="purple" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Tooltip/>
        <Legend />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  )
}

export default Chart
