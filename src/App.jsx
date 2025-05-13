import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import './fonts.css'
import AppLayout from './Components/Layout/AppLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import ErrorPage from './Pages/ErrorPage'
import Menu from './Pages/Menu'
import Reservations from './Pages/Reservations'
import Order from './Pages/Order'
import Login from './Pages/login'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "menu",
          element: <Menu />,
        },
        {
          path: "reservations",
          element: <Reservations />,
        },
        {
          path: "order",
          element: <Order/>
        },
        {
          path: 'login',
          element: <Login/>
        }
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
