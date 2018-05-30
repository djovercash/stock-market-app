import StocksAPI from '../services/stocksAPI'

export const FETCHING_STOCK = "FETCHING_STOCK"
export const FETCHED_STOCK = "FETCHED_STOCK"
export const FETCHING_SPEC_STOCK = "FETCHING_SPEC_STOCK"
export const FETCHED_SPEC_STOCK = "FETCHED_SPEC_STOCK"


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

export function fetchSpecStock(symbol) {
  return function(dispatch) {
    dispatch({ type: FETCHING_SPEC_STOCK})
    StocksAPI.fetchStock(symbol).then(stock => {
      dispatch({
        type: FETCHED_SPEC_STOCK,
        payload: stock
      })
    })
  }
}
