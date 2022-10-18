const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

const corsOptions ={
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))


const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(process.env.PORT || 5000, () => {
            console.log(`SERVER STARTED ON PORT 5000`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()