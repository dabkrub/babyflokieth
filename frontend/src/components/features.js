import React from 'react'
import antiwhale from '../images/antiwhale.png'
import mobileAntiwhale from '../images/mobile-antiwhale.png'
import communityVote from '../images/communityvote.png'
import mobileCommunityVote from '../images/mobile-communityvote.png'
import buyback from '../images/buyback.png'
import mobileBuyBack from '../images/mobile-buyback.png'

function features(props) {
  return (
    <div className='features' ref={props.FeaturesRef}>
      <h1>FEATURES</h1>
      <div className='features-line'></div>
      <div className='features-flex'>
        <div className='features-box'>
          <img src={communityVote} />
          <img src={mobileCommunityVote} className='mobile' />
          <h1>Community Votes</h1>
          <p>Community can helps vote for the next marketing etc.</p>
        </div>
        <div className='features-box'>
          <img src={antiwhale} />
          <img src={mobileAntiwhale} className='mobile' />
          <h1>Anti-Whale</h1>
          <p>
            Max Tx Sell – 0.5 % Max Wallet when start 2% (increase when hit the
            certain market cap, also Max Tx sell )
          </p>
        </div>
        <div className='features-box'>
          <img src={buyback} />
          <img src={mobileBuyBack} className='mobile' />
          <h1>Buy Back</h1>
          <p>4% Buy Back For Help the Chart stay BULLISH !</p>
        </div>
      </div>
    </div>
  )
}

export default features
