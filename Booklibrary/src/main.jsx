import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BookDesc from "./components/BookDesc.jsx"
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import {RouterProvider, createBrowserRouter} from "react-router-dom"

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:":bookId",
        element:<BookDesc/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
