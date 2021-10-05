import React from 'react'
import chart from '../images/chart.png'
import chart2 from '../images/chart2.png'
import chartMobile from '../images/chart-mobile.png'

function tokenomic(props) {
    return (
      <div className='tokenomics' ref={props.TokenomicsRef}>
        <h1>TOKENOMICS</h1>
        <div className='tokenomics-line'></div>
        <div className='tokenomics-flex'>
          <div className='tokenomics-box'>
            <img src={chart} id='chart' />
            <img src={chartMobile} id='chart-mobile' />
          </div>
          <div className='tokenomics-box'>
            <img src={chart2} id='chart2' />
          </div>
        </div>
        <div>
          <img src={chartMobile} id='chart-mobile' />
        </div>
      </div>
    )
}

export default tokenomic
