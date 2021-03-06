import React, { Component } from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import './App.css';
import { fetchStock } from './actions/stocks'
import {connect} from 'react-redux'
import MainPageContainer from './containers/mainPageContainer'

const App = () => {
  return (
    <div className="App">
      <MainPageContainer />
    </div>
  )
}

export default App



//GH PAGES WERE CAUSING PROBLEMS WITH ROUTER, BUT BELOW IS HOW TO ADD ROUTER
// class App extends Component {

  // componentDidMount() {
  //   this.props.history.push("/home")
  // }

//   render() {
//     return (
//       <div className="App">
//         <Switch>
//           <Route path="/home" render={(routerParams) => {
//             return <MainPageContainer {...routerParams} />
//           }}/>
//         </Switch>
//       </div>
//     )
//   }
// }
//
//
// function mapStateToProps(state) {
//   return {
//     stocks: state.stocks,
//     isLoading: state.isLoading
//   }
// }
//
// export default withRouter(connect(mapStateToProps, {fetchStock})(App));
