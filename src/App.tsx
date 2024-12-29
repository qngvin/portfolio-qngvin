import { Outlet, useLocation } from 'react-router-dom' // Add Link for navigation
import Navbar from './components/navbar/Navbar'
import './fonts/UbuntuMono-Regular.ttf'
import Home from './pages/home/Home'
const App = () => {
  const location = useLocation()
  return (
    <>
      <Navbar />

      <main>{location.pathname === '/' ? <Home /> : <Outlet />}</main>
    </>
  )
}

export default App
