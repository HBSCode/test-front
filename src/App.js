import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import '../src/styles/App.scss'
import Bag from './components/Bag'
import Payment from './components/Payment'
import Confirm from './components/Confirm'

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={Bag}></Route>
      <Route path="/pagamento" component={Payment}></Route>
      <Route path="/confirmacao" component={Confirm}></Route>
    </div>
  </BrowserRouter>
)

export default App
