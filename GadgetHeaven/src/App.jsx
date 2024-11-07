
import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './Component/Footer/Footer'
import Navbar from './Component/Navbar/Navbar'

function App() {
  const location = useLocation();
  const showNavbar = location.pathname === '/';
  return (
    <div className='mt-5 mx-5'>
      {!showNavbar&& <Navbar/>}
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
