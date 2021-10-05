import React from 'react'
import roadmapArrow from '../images/roadmap-arrow.png'
import mobileRoadmapArrow from '../images/mobile-roadmap-arrow.png'

function Marketing(props) {
  return (
    <div className='marketing' ref={props.MarketingRef}>
      <h1>MARKETING</h1>
      <div className='marketing-line'></div>
      <div className='marketing-flex'>
        <div className='marketing-box'>
          <div className='marketing-arrow'>
            <img src={roadmapArrow} />
            <h1 className='marketing-phase'>Phase 1</h1>
          </div>
          <h2>
            Awareness <span>(Organic)</span>
          </h2>
          <div className='marketing-detail'>
            <ul>
              <li>Telegram shilling hard/soft shilling</li>
              <li>Community Entertainment</li>
              <li>Building up social media presence</li>
              <li>Inhouse AMA</li>
            </ul>
          </div>
        </div>

        <div className='marketing-box'>
          <div className='marketing-arrow'>
            <img src={roadmapArrow} />
            <h1 className='marketing-phase'>Phase 2</h1>
          </div>
          <h2>Accelerate</h2>
          <div className='marketing-detail'>
            <ul>
              <li>CMS Trending</li>
              <li>BIG GROUP PINNED</li>
              <li>Website game ( play to earn )</li>
              <li>Influencer</li>
              <li>#1 Trending On Dextools</li>
            </ul>
          </div>
        </div>

        <div className='marketing-box'>
          <div className='marketing-arrow'>
            <img src={roadmapArrow} />
            <h1 className='marketing-phase'>Phase 3</h1>
          </div>

          <h2>Extensive</h2>
          <div className='marketing-detail'>
            <ul>
              <li>Bilboards</li>
              <li>Continues refreshment of previous activities</li>
              <li>News articles</li>
              <li>Targeted Ad Campaign</li>
              <li>Celebrity Sponsorships</li>
              <li>Extended and cross-platform advertisement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Marketing
