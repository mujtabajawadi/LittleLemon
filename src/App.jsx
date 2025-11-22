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
import Login from './Pages/Login'
import ConfirmedBooking from './Pages/ConfirmedBooking'


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
        }
      ],
    },
    {
      path: '/confirmed',
      element: <ConfirmedBooking/>
    }
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
