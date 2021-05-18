//import js files
import { postData } from './js/postData'
import { getData } from './js/getData'
import { constructEntry } from './js/constructEntry'


const button = document.getElementById('submit');
button.addEventListener('click', analyzeText);

function analyzeText () {
  const entry = document.getElementById('web-url').value;
  postData('/add', entry)
  .then(constructEntry(getData('/all')))
}
//import sass files

//export {.js files (variable names)}