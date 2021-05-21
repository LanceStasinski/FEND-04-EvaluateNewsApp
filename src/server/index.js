//set endpoint
projectData = [];

//get api key
const dotenv = require('dotenv')
dotenv.config()
const apiKey = process.env.API_KEY;

//load dependencies
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { json } = require('body-parser')

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

//POST route where the callback function sends a post request to external api
app.post('/add', getNLPData);

//POST request to meaningcloud.com
function getNLPData (req, res) {
  const newsURL = req.body.url;
  const results = await fetch(`https://api.meaningcloud.com/sentiment-2.1=${apiKey}&url=${newsURL}`,
  { method: 'POST'});





  console.log(req.body);
  //create new data object that will be sent to meaningcloud
  const formData = new FormData();
  //add personal api key to object
  formData.append("key", apiKey);
  //add user-entered url to object
  formData.append("url", req.body);
  //set language to auto, response to english, and include detailed response
  formData.append("lang", "auto");
  formData.append("ilang", "en");

  //post request that should result in a new object containing the response from
  //meaningcloud.
  const apiInfo = postAPI('https://api.meaningcloud.com/sentiment-2.1', formData)
  //only add new object to projectData once the request has been completed
  .then(projectData.push(apiInfo))
}

const postAPI = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    body: data,
    redirect: 'follow'
  });

  try {
    const newData = await response.json();
    return newData;
  } catch(error) {
    console.log('error', error);
  }
}

//GET route
app.get('/all', sendData)

function sendData (req, res) {
  res.send(projectData[0])
}