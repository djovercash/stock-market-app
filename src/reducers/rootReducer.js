import {FETCHING_STOCK, FETCHED_STOCK } from '../actions/stocks'

export const defaultState = {
  stocks: [],
  isLoading: false
}

function rootReducer (state = defaultState, action) {
  switch (action.type) {
    case FETCHING_STOCK:
    return {...state, isLoading: true};
    case FETCHED_STOCK:
    return {stocks: [...state.stocks, action.payload], isLoading: false};
    default:
    return state
  }
}

export default rootReducer
