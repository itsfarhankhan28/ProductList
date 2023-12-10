/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter,Outlet } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Homepage'
import ProductDetails from './Pages/ProductDetails'
import Error from './Pages/Error'
import Header from './Components/Header'

function App() {

  return (
    <>
    <div className='flex flex-col gap-10'>
      <Header/>
      <div className='flex justify-center items-center'>
      <Outlet/>
      </div>
    </div>
    </>
  )
}

export const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Homepage/>
      },
      {
        path:'/product/:id',
        element:<ProductDetails/>
      }
    ]
  }
])

export default App
