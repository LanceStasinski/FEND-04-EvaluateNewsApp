//get api key
const dotenv = require('dotenv')
dotenv.config()
const apiKey = process.env.API_KEY;

//load dependencies
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch')

//start instance and initialize depenedencies
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//initialize the dist folder created by webpack
app.use(express.static('dist'))

//spin up server
app.listen(3030, function () {
  console.log(`running on localhost: 3030`)
})

//POST request to meaningcloud.com
const getNLPData = async (req, res) => {
  const newsURL = req.body.url;
  console.log(newsURL);
  const results = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${newsURL}&lang=en`,
  { method: 'POST' });

  try {
    const apiData = await results.json();
    res.send(apiData);
  } catch (error) {
    console.log("error", error)
  }
}

//POST route where the callback function sends a post request to external api
app.post('/add', getNLPData);



