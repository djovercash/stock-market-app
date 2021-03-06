import React from 'react'
import Chart from './stockChart'
import Button from './button'

const genDetails = (props) => {

  const findCompany = (data) => {
    if (data.length > 0) {
      let keyArr = Object.keys(data[0])
      if (keyArr[1] === "ADBE") {
        return "Adobe"
      } else if (keyArr[1] === "CRM") {
        return "Salesforce"
      } else if (keyArr[1] === "ORCL") {
        return "Oracle"
      } else if (keyArr[1] === "ATVI") {
        return "Activision"
      } else {
        return "Microsoft"
      }
    }
  }

  const findClosing = (data) => {
    if (data.length > 0) {
      let keyArr = Object.keys(data[0])
      let symbolKey = keyArr[1]
      let closing = data[0][`${symbolKey}`]
      return closing
    }
  }

  const findSymbol = (data) => {
    if (data.length > 0) {
      let keyArr = Object.keys(data[0])
      return keyArr[1]
    }
  }

  const findTime = (data) => {
    if (data.length > 0) {
      let finalDataPoint = data.length-1
      return data[finalDataPoint].name
    }
  }

  const removeBox = () => {
    let box = document.getElementById("genDetailsBox")
    box.style.display = "none"
  }


  return (
    <div id="genDetailsBox">
      <div id="genDetailsBoxInfo">
        <h1>{findCompany(props.data)}</h1>
        <h3>Symbol: {findSymbol(props.data)}</h3>
        <h3>Closing: {findClosing(props.data)}</h3>
        <h5>As of: {findTime(props.data)}</h5>
        <Button id="returnButton" toggle={removeBox} stock={["RETURN"]} />
        <Chart data={props.data} width={"100%"} height={"75%"} />
      </div>
    </div>
  )
}

export default genDetails;
