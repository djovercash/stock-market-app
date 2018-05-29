import React from 'react'
import StockChart from '../components/stockChart'
import GenDetails from '../components/genDetails'
import Button from '../components/button'

class MainPageContainer extends React.Component {

  render() {
    return (
      <div>
        <Button />
        <StockChart />
        <GenDetails />
      </div>
    )
  }
}

export default MainPainContainer
