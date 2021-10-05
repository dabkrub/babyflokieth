import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'cors'
import player from './models/player.js'
import {} from 'dotenv/config'

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded())

mongoose
  .connect(process.env.DBKEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(app.listen(PORT), console.log(`server run on port ${PORT}`))
  .catch((err) => console.log(err))

app.post('/score', async (req, res) => {
  const guy = await player.findOne({CA: req.body.CA})
  if(guy==null||guy.highScore<req.body.highScore)
  {
    const data = await player.findOneAndUpdate(
      { CA: req.body.CA },
      {
        highScore: req.body.highScore,
        name: req.body.name,
        telegramID: req.body.telegramID,
      },
      { new: true, upsert: true }
    )
    res.send(data)
  }
  else
    res.send('no')
})

app.get('/topTen', async (req, res) => {
  await player
    .find()
    .sort({highScore:-1})
    .limit(8)
    .exec()
    .then((data) => res.json(data)).catch((err) => res.sendStatus(404))
})
