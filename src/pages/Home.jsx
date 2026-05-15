import React from 'react'
import Hero from '../components/home/Hero'
import KnowledgeBase from '../components/home/KnowledgeBase'
import PopularCollections from '../components/home/PopularCollections'
import TrendingNow from '../components/home/TrendingNow'
import SeasonalSpotlight from '../components/home/SeasonalSpotlight'
import DietaryDiscovery from '../components/home/DietaryDiscovery'

const Home = () => {
  return (
    <>
      <Hero />
      <KnowledgeBase />
      <PopularCollections />
      <TrendingNow />
      <SeasonalSpotlight />
      <DietaryDiscovery />
    </>
  )
}

export default Home
