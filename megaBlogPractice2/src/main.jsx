import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import store from './store/store.js'
import {Provider} from "react-redux"
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store} >
   <RouterProvider router={router} >
   <App />
   </RouterProvider>
   </Provider>
  </React.StrictMode>,
)
