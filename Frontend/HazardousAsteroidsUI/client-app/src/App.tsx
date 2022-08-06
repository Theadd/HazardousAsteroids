import React from 'react'
import HazardousAsteroidsPage from './pages/HazardousAsteroidsPage/HazardousAsteroidsPage'

function App() {
  return (
    <div>
      <header data-theme='business' className='prose w-full bg-transparent pt-16 pb-8 px-0 sm:px-4 lg:max-w-4xl mx-auto items-center'>
        <h1 className='text-center text-accent' style={{ fontVariant: 'all-small-caps' }}>Hazardous Asteroids</h1>
      </header>
      <HazardousAsteroidsPage />
    </div>
  )
}

export default App
