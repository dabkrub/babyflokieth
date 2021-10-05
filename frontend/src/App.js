import React, { useState, useRef } from 'react'
import Contact from './components/contact'
import Features from './components/features'
import Header from './components/header'
import Nav from './components/nav'
import Roadmap from './components/roadmap'
import Tokenomics from './components/tokenomic'
import Marketing from './components/marketing'
import Game from './components/games'
import './App.css'

function App() {
  const TopRef = useRef(null)
  const FeaturesRef = useRef(null)
  const TokenomicsRef = useRef(null)
  const RoadmapRef = useRef(null)
  const MarketingRef = useRef(null)
  const [showGamePage,setShowGamePage] = useState(false)
  const scrollToTop = () => {
    TopRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToFeatures = () => {
    FeaturesRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToTokenomics = () => {
    TokenomicsRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToRoadmap = () => {
    RoadmapRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToMarketing = () => {
    MarketingRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  if (showGamePage) {
    return (
      <div>
        <Game backToHome={() => setShowGamePage(false)} />
      </div>
    )
  } else
    return (
      <div ref={TopRef}>
        <Nav
          scrollToTop={scrollToTop}
          scrollToFeatures={scrollToFeatures}
          scrollToTokenomics={scrollToTokenomics}
          scrollToRoadmap={scrollToRoadmap}
          scrollToMarketing={scrollToMarketing}
        />
        <div>
          <Header setShowGamePage={() => setShowGamePage(true)} />
          <Features FeaturesRef={FeaturesRef} />
          <Tokenomics TokenomicsRef={TokenomicsRef} />
          <Roadmap RoadmapRef={RoadmapRef} />
          <Marketing MarketingRef={MarketingRef} />
          <Contact />
        </div>
      </div>
    )
}

export default App
