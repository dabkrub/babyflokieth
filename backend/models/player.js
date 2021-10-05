import mongoose from 'mongoose'

const playerSchema = mongoose.Schema({
    name: String,
    telegramID: String,
    CA: String,
    highScore: {
        type: Number,
        default: 0
    }
})

const player = mongoose.model('player', playerSchema)

export default player