//get api key
const dotenv = require('dotenv')
dotenv.config()
const apiKey = process.env.API_KEY

//load dependencies
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//start instance and initialize depenedencies
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//initialize the dist folder created by webpack
app.use(express.static('dist'))

//spin up server
const port = 3030;
app.listen(port, function () {
  console.log(`running on localhost: ${port}`)
})
