import React from 'react'
import twitter from '../images/twitter.png'
import telegram from '../images/telegram.png'

function contact() {
  return (
    <div className='contact'>
      <div className='contact-flex'>
        <h1>CONTACT</h1>
        <a href='https://twitter.com/babyfloki_eth' target='_blank'>
          <span>
            <img src={twitter} />
          </span>{' '}
          BABY FLOKI ETH
        </a>
        <a href='https://t.me/babyflokieth' target='_blank'>
          <span>
            <img src={telegram} />
          </span>{' '}
          BABY FLOKI ETH
        </a>
      </div>
    </div>
  )
}

export default contact
