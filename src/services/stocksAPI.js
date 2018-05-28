const STOCKAPI = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=5min&apikey=MYN15QOATEIHU0ND&symbol="

class stockAPI {
  static fetchStock(symbol) {
    return fetch(`${STOCKAPI}GOOGL`).then(res => res.json())
  }
}

export default stockAPI
