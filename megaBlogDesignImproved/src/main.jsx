import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import store from './store/store.js'
import {Provider} from "react-redux"
import PostForm from './components/PostForm.jsx'
import AddPost from './pages/AddPost.jsx'
import Post from './components/Post.jsx'


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
      {
        path:"/add-post",
        element:<AddPost/>
      },
      {
          path: "/post/:slug",
          element: <Post/>,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}  >
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
