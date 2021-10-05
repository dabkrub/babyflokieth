import React, { useState, useEffect } from 'react'
import axios from 'axios'
import logo from '../images/logo.png'
import logo2 from '../images/fakelogo.png'
import logo3 from '../images/fakelogo2.png'
import uniqid from 'uniqid'

export default function Logopop(props) {
  const [countdown, setCountdown] = useState(true)
  const [picture, setPicture] = useState([])
  useEffect(() => {
    setCountdown(false)
    setInterval(() => {
      props.setTime((time) => time - 1)
    }, 1000)
  }, [])

  useEffect(() => {
    setInterval(() => {
        const temp = [...picture]
        temp.push(randomPicture())
        temp.push(randomPicture())
        temp.push(randomPicture())
        temp.push(randomPicture())
        temp.push(randomPicture())
        temp.push(randomPicture())
        temp.push(randomPicture())
        temp.push(randomPicture())
        temp.push(randomPicture())
        temp.push(randomPicture())
        temp.push(randomPicture())
        temp.push(randomPicture())
        setPicture(temp)
    },2600)
  }, [])

  const onClickPicture=(e)=>{
    setPicture(picture=>picture.filter(pic=>pic.props.id!==e.target.id))
  }

  const randomNumber = (number) => {
    return Math.floor(Math.random() * number)
  }
  const randomPicture = () => {
    const type = randomNumber(10)
    var x = randomNumber(77)+6
    var y = randomNumber(48)*window.innerHeight/100 + 170
    var size = randomNumber(100) + 100
    if(window.innerWidth<1080)
    {
       size = randomNumber(70) + 70
       x = randomNumber(72) + 4
    }
    if (type <= 5) {
      return (
          <img
            id= {uniqid()}
            src={logo}
            style={{
              width: size,
              height: 'auto',
              position: 'absolute',
              top: `${y}px`,
              left: `${x}%`,
            }}
            onClick={(e)=>{
                onClickPicture(e)
                props.setPoint(point=>point+5)
            }}
          />
        )
    } else if (type <= 7) {
      return (
        <img
          id={uniqid()}
          src={logo2}
          style={{
            width: size,
            height: 'auto',
            position: 'absolute',
            top: `${y}px`,
            left: `${x}%`,
          }}
          onClick={(e) => {
            onClickPicture(e)
            props.setPoint((point) => point -10)
          }}
        />
      )
    } else {
      return (
        <img
          id={uniqid()}
          src={logo3}
          style={{
            width: size,
            height: 'auto',
            position: 'absolute',
            top: `${y}px`,
            left: `${x}%`,
          }}
          onClick={(e) => {
            onClickPicture(e)
            props.setPoint((point) => point - 10)
          }}
        />
      )
    }
    }

  if (props.time > 30)
    return (
  
        <div className='countdown'>
        <h1>Game start in {props.time - 30}</h1>
      </div>
    )
  else
    return (
      <div className='logopop'>
        <div className='blur-bg'>
          <h1>{props.time} seconds left!</h1>
          <h2 style={{fontSize:'36px'}}>{props.point}</h2>
        </div>
        <div
          style={{
            margin: 'auto',
            marginTop: '20px',
            width: '88%',
            height: '60%',
            border: '1px solid black',
            backdropFilter: 'blur(10px) brightness(1.01)',
          }}
        ></div>
        {picture.map((pic) => pic)}
      </div>
    )
}
