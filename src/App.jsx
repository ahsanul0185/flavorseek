import React from 'react'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import Hero from './components/home/Hero'
import KnowledgeBase from './components/home/KnowledgeBase'
import PopularCollections from './components/home/PopularCollections'
import TrendingNow from './components/home/TrendingNow'
import SeasonalSpotlight from './components/home/SeasonalSpotlight'
import DietaryDiscovery from './components/home/DietaryDiscovery'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <KnowledgeBase />
        <PopularCollections />
        <TrendingNow />
        <SeasonalSpotlight />
        <DietaryDiscovery />
      </main>
      <Footer />
    </>
  )
}

export default App