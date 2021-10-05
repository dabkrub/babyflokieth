import React from 'react'
import roadmapArrow from '../images/roadmap-arrow.png'
import mobileRoadmapArrow from '../images/mobile-roadmap-arrow.png'

function roadmap(props) {
  return (
    <div className='roadmap' ref={props.RoadmapRef}>
      <h1>ROADMAP</h1>
      <div className='roadmap-line'></div>
      <div className='roadmap-flex'>
        <div className='roadmap-box'>
          <div className='roadmap-arrow'>
            <img src={roadmapArrow} />
            <h1 className='roadmap-phase'>Launch</h1>
          </div>
          <h2>Launch</h2>
          <ul>
            <div className='mobile-line'></div>
            <li>Beta website launch</li>
            <li>Social media setup</li>
            <li>Core team established</li>
            <li>Fair launch</li>
            <li>Organic phase 1 marketing</li>
            <li>Whitepaper in progress</li>
            <li>First audit completed</li>
            <li>CoinGecko submitted</li>
            <li>CoinMarketcap submitted</li>
            <li>Milestone settled</li>
            <li>Announce Baby Floki ETH Feature</li>
          </ul>
        </div>

        <div className='roadmap-box'>
          <div className='roadmap-arrow'>
            <img src={roadmapArrow} />
            <h1 className='roadmap-phase'>Growth</h1>
          </div>
          <h2>Growth</h2>
          <ul>
            <li>Phase 2 Marketing Initialized</li>
            <li>Mid-Tier social media Collaboration</li>
            <li>Top Trending on DexTools</li>
            <li>Cross-platform advertisement</li>
            <li>Second Audit Completed</li>
            <li>Listed on CoinGekco</li>
            <li>Listed on CooinMarketcap</li>
            <li>Reward Dashboard</li>
            <li>Minigame Competition</li>
            <li>Whitepaper</li>
          </ul>
        </div>

        <div className='roadmap-box'>
          <div className='roadmap-arrow'>
            <img src={roadmapArrow} />
            <h1 className='roadmap-phase'>Expand</h1>
          </div>
          <h2>Expand</h2>
          <ul>
            <li>Phase 3 Marketing Initialized</li>
            <li>Certik Audit completed</li>
            <li>Huge Social Media Partnership</li>
            <li>NFT</li>
            <li>Grand Prize Competition</li>
            <li>Baby Floki ETH Farmland</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default roadmap
