//set endpoint
projectData = [];

//get api key
const dotenv = require('dotenv')
dotenv.config()
const apiKey = process.env.API_KEY

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

//POST route
app.post('/add', getNLPData);

function getNLPData (req, res) {
  console.log(req.body);
  const formData = new FormData();
  formData.append("key", apiKey);
  formData.append("url", req.body);
  formData.append("lang", "auto");
  formData.append("ilang", "en");
  formData.append("verbose", "y");

  const apiInfo = postAPI('https://api.meaningcloud.com/sentiment-2.1', formData);
  .then()

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