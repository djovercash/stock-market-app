import React from 'react'
import {ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts'

const Chart = (props) => {

  return (
    <div id="chart">
      <ResponsiveContainer width={props.width} height={props.height} >
        <LineChart data={props.data}>
          <Line type="monotone" dataKey="ADBE" stroke="red" />
          <Line type="monotone" dataKey="CRM" stroke="green" />
          <Line type="monotone" dataKey="ORCL" stroke="blue" />
          <Line type="monotone" dataKey="ATVI" stroke="orange" />
          <Line type="monotone" dataKey="MSFT" stroke="purple" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Tooltip/>
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer >
    </div>
  )
}

export default Chart
