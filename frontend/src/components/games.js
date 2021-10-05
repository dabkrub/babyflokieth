import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Logopop from './logopop'
import gamereward from '../images/gamereward.png'
import loading from '../images/loading.gif'
function Game(props) {
  const [topTen, setTopTen] = useState(null)
  const [isReady, setIsReady] = useState(false)
  const [name, setName] = useState('')
  const [telegram, setTelegram] = useState('')
  const [CA, setCA] = useState('')
  const [startGame, setStartGame] = useState(false)
  const [point, setPoint] = useState(0)
  const [time, setTime] = useState(33)
  const [res, setRes] = useState(null)
  useEffect(() => {
    setName(localStorage.getItem('name'))
    setTelegram(localStorage.getItem('telegram'))
    setCA(localStorage.getItem('CA'))
    axios
      .get('https://polar-bayou-69636.herokuapp.com/topTen')
      .then((res) => {
        setTopTen(res.data)
      })
      .catch((err) => console.log(err))

  }, [])

  useEffect(() => {
    if (name !== '' && telegram !== '' && CA !== '' )
      if(CA!=null&&CA.length==42)
      setIsReady(true)
    else setIsReady(false)
  }, [name, telegram, CA])

  useEffect(()=>{
    if(time<0)
      setStartGame(false)
  })

  const clickStartGame = (e)=>
  {
    e.preventDefault()
    localStorage.setItem('name',name)
    localStorage.setItem('telegram',telegram)
    localStorage.setItem('CA',CA)
    setStartGame(true)
  }

  const uploadScore = async()=>{
    axios
      .post('https://polar-bayou-69636.herokuapp.com/score', {
        name: name,
        telegramID: telegram,
        CA: CA,
        highScore: point,
      })
      .then((respond) => setRes(respond))
      
  }
  if(time<=0)
  {
    uploadScore()
    if(res==null)
    {
      return (
        <div className='countdown'>
          <div className='show-point'>
            <img src={loading} />
            <h1>Please wait... uploading data</h1>
          </div>
        </div>
      )
    }
    else
    {
      return (<div className='countdown'>
          <div className='show-point'>
            <h1>{name} got {point} points!!! Cool</h1>
            <button onClick={()=>window.location.reload()}>I love this game and this coin</button>
          </div>
        </div>)
    }
  }
  else if (startGame) {
    return (<Logopop point={point} setPoint={setPoint} name={name} CA={CA} telegram={telegram} time={time} setTime={setTime}/>)
  } else {
    if (topTen != null)
      return (
        <div className='game'>
          <h1>30 Seconds Click Challenge</h1>
          <div className='game-flex'>
            <div className='game-leaderboard'>
              <h2>LEADERBOARD</h2>
              <div className='blurbg'>
                <ul>
                  {topTen.map((player) => (
                    <li>
                      <h3>{player.name}</h3>
                      <h4>{player.highScore}</h4>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='game-instruction'>
              <h2>HOW TO PLAY</h2>
              <ol>
                <li>Own 2.5 million token of BabyFlokiETH (or you can particate out minigame and win nothing!!)</li>
                <li>Fill in your Name/Contract Address/TelegramID</li>
                <li>Click Play Game Button</li>
                <li>Just click BabyFlokiETH to gain +5 point.</li>
                <li>Click something else? -10 for you</li>
              </ol>
            </div>
            <div className='game-reward'>
              <h2>REWARD</h2>
              <img src={gamereward} />
            </div>
            <div className='game-form'>
              <form>
                <label>Display Name : </label>
                <br />
                <input
                  type='text'
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <br />
                <label>Telegram ID : </label>
                <br />
                <input
                  type='text'
                  onChange={(e) => setTelegram(e.target.value)}
                  value={telegram}
                />
                <br />
                <label>Contract Address : </label>
                <br />
                <input
                  type='text'
                  onChange={(e) => setCA(e.target.value)}
                  value={CA}
                /><br/>
                {isReady ? (
                  <button
                    className='ready-btn'
                    type='submit'
                    onClick={clickStartGame}
                  >
                    Play Game
                  </button>
                ) : (
                  <button
                    className='disable-btn'
                    onClick={(e) => {
                      e.preventDefault()
                    }}
                  >
                    Start Game
                  </button>
                )}
              </form>
            </div>
          </div>
          <div className='bottom'>{/* <Contact /> */}</div>
        </div>
      )
    else
      return (
        <div className='countdown'>
          <img src={loading}/>
        </div>
      )
  }
}

export default Game
