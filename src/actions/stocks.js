import StocksAPI from '../services/stocksAPI'

export const FETCHING_STOCK = "FETCHING_STOCK"
export const FETCHED_STOCK = "FETCHED_STOCK"


export function fetchStock(symbol) {
  return function(dispatch) {
    dispatch({ type: FETCHING_STOCK})
    StocksAPI.fetchStock(symbol).then(stock => {
      dispatch({
        type: FETCHED_STOCK,
        payload: stock
      })
    })
  }
}
