import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from "./store/store.js"
import { Router, createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store} >
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>

)
