import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import NewUser from './pages/NewUser.jsx'
import AllUsers from './pages/AllUsers.jsx'
import History from './pages/History.jsx'
import Show from "./pages/Show.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/allusers",
        element: <AllUsers/>,
      },
      {
        path: "/history",
        element: <History/>
      },
      {
        path: "/newuser",
        element: <NewUser/>
      },
      {
        path: "/allusers/:id",
        element: <Show/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>
)
