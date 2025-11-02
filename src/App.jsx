import React from 'react'
import Body from './Components/Home/Body'
import NavBar from './Components/Header/NavBar'
import { Provider } from 'react-redux'
import store from './Components/utils/Store'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import MainContainer from './Components/Home/MainContainer'
import WatchPage from './Components/WatchPage/WatchPage'

const approuter = createBrowserRouter([{
  path: '/',
  element: <Body />,
  children: [
    {
      path: '/',
      element: <MainContainer />
    },
    {
      path: '/watch',
      element: <WatchPage />
    }
  ]
}])

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <RouterProvider router={approuter} />
      </div>
    </Provider>
  )
}

export default App
