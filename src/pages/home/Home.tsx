import React from 'react'

const Home: React.FC = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
      <p style={{ textAlign: 'center', fontFamily: 'UbuntuMono', fontSize: '3rem', fontWeight: 700 }}>
        Tran Quang Vinh
      </p>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0 }}>3 icon</div>
        <div>Nội dụng giưới thieeuj</div>
      </div>
    </div>
  )
}

export default Home
