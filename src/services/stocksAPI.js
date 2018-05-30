const STOCKAPI = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=5min&apikey=MYN15QOATEIHU0ND&symbol="
const STOCKSPECAPI = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=1min&apikey=MYN15QOATEIHU0ND&symbol="

class stockAPI {
  static fetchStock(symbol) {
    return fetch(`${STOCKAPI}${symbol}`).then(res => res.json())
  }
}

export default stockAPI
