import React from 'react'

const genDetails = (props) => {

  const findCompany = (symbol) => {
    if (symbol === "GOOGL") {
      return "Google"
    } else if (symbol === "TWTR") {
      return "Twitter"
    } else if (symbol === "FB") {
      return "Facebook"
    } else if (symbol === "AAPL") {
      return "Apple"
    } else {
      return "Microsoft"
    }
  }

  return (
    <div className="genDetailsBox" >
      <h3>{findCompany(props.details)}</h3>
      <h5>Symbol: {props.details}</h5>
      <h5>Closing: ####.##</h5>
      <h5>Something Else: #########</h5>
    </div>
  )
}

export default genDetails;
