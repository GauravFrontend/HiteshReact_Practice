import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Add from './components/Add.jsx'
import Remove from './components/Remove.jsx'
import Home from './components/Home.jsx'
import {Provider} from "react-redux"
import { store } from './app/store.js'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"add",
        element:<Add/>
      },
      {
        path:"remove",
        element:<Remove/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
