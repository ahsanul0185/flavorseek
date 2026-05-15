import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import Home from './pages/Home'
import Recipes from './pages/Recipes'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App