import { Outlet, useLocation } from 'react-router-dom' // Add Link for navigation
import Navbar from './components/navbar/Navbar'

const App = () => {
  const location = useLocation()
  return (
    <>
      <Navbar />

      <main>
        {location.pathname === '/' ? (
          <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
            <p style={{ textAlign: 'center' }}>TranQuangVinh</p>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', left: 0 }}>3 icon</div>
              <div>Nội dụng giưới thieeuj</div>
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </>
  )
}

export default App
