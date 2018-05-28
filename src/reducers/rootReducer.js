import {FETCHING_STOCK, FETCHED_STOCK} from '../actions/stocks'


export const defaultState = {
  stocks: [{name: "Yas"}, {name: "Yes"}, {name: "NaNa"}],
  isLoading: false
}

function rootReducer (state = defaultState, action) {
  switch (action.type) {
    case FETCHING_STOCK:
    return {...state, isLoading: true};
    case FETCHED_STOCK:
    return {...state, stocks: [...state.stocks, action.payload]}
    default:
    return state
  }
}


export default rootReducer
