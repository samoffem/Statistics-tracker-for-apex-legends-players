const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')


//load env
dotenv.config({path: './config.env'})
const app = express();

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use('/api/v1/profile', require('./routes/profile'))

app.listen(process.env.PORT, ()=>{
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
})