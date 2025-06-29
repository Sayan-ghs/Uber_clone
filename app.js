const dotenv = require('dotenv')
dotenv.config()
const cookieParser = require('cookie-parser')
const express = require('express')
const cors = require('cors')
const app = express()
const connectToDB = require('./DB/db')
connectToDB()
const userRoutes = require('./Routes/user.Routes')
const captainRoutes = require('./Routes/captain.routes')

app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',(req,res)=>{
        res.send('Hello World')
})
app.use('/users',userRoutes)

app.use('/captain',captainRoutes)

module.exports = app 