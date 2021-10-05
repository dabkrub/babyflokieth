import React, { useState } from 'react'
import logo from '../images/logo.png'
import Game from '../components/games'
function Header(props) {
  return (
    <div className='header'>
      <div className='header-flex'>
        <div>
          <div className='header-blurbg'></div>
          <div className='header-flex2'>
            <h1>
              BABY FLOKI <span>ETH</span>
            </h1>
          </div>
          <div className='header-paragraph-flex'>
            <p>
              Welcome to Baby Floki ETH Token Baby Floki ETH Token is token
              inspiration by ETH token which is one of the most crucial token in
              nowadays on cryptocurrency's world and have greatly potential to
              growth in the future. we would like to propose you an opportunity
              to hold our coin and get 5% of every transaction back in ETH token
              and we also have 4% buyback function to sustain the healthy chart.
              We also go with the Trend Floki that Elon Tweet , so this will
              moon hard like every Floki token before !
            </p>
          </div>
          <button className='game-btn' onClick={props.setShowGamePage}>
            Game for REWARD
          </button>
        </div>
        <img src={logo} />
      </div>
      <div className='header-flex-mobile'>
        <img src={logo} />
        <div>
          <a
            className='graph-btn'
            href='https://poocoin.app/tokens/0x1ea926cb47c47aa884e2ab2901a62ff1f1dd14ea'
            target='_blank'
          >
            see GRAPH
          </a>
          <a
            className='pcs-btn'
            href='https://pancakeswap.finance/swap?outputCurrency=0x1ea926CB47C47aA884E2AB2901a62ff1f1Dd14Ea'
            target='_blank'
          >
            Buy on PCS
          </a>
          <button className='game-btn' onClick={props.setShowGamePage}>
            Game for REWARD
          </button>
          <div className='pseudo-btn'></div>
        </div>
        <div className='header-blurbg-mobile'></div>
        <div className='header-paragraph-flex-mobile'>
          <p>
            Welcome to Baby Floki ETH Token Baby Floki ETH Token is token
            inspiration by ETH token which is one of the most crucial token in
            nowadays on cryptocurrency's world and have greatly potential to
            growth in the future. we would like to propose you an opportunity to
            hold our coin and get 5% of every transaction back in ETH token and
            we also have 4% buyback function to sustain the healthy chart. We
            also go with the Trend Floki that Elon Tweet , so this will moon
            hard like every Floki token before !
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
