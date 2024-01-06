/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter,Outlet } from 'react-router-dom'
import './App.css'
import Error from './Pages/Error'
import Products from './Pages/Products'
import Details from './Pages/Details'
import Cart from './Pages/Cart'

function App() {

  return (
    <>
    <div className='flex flex-col gap-10'>
      {/* <Header/> */}
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
        element:<Products/>
      },
      {
        path:'/details/:id',
        element:<Details/>
      },
      {
        path:'/cart',
        element:<Cart/>
      }
    ]
  }
])

export default App
