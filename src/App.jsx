import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Benefits from './components/Benefits'
import Demo from './components/Demo'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text-primary">
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Benefits />
        <Demo />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
