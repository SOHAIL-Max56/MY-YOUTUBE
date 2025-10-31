import React from 'react'
import Body from './Components/Home/Body'
import NavBar from './Components/Header/NavBar'
import { Provider } from 'react-redux'
import store from './Components/utils/Store'
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <Body />
      </div>
    </Provider>
  )
}

export default App
