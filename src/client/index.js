//import js files
import { postData } from './js/postData'
import { getData } from './js/getData'
import { constructEntry } from './js/constructEntry'


const button = document.getElementById('submit');
button.addEventListener('click', analyzeText);

function analyzeText () {
  const input = document.getElementById('web-url').value;
  postData('/add', input)
  .then(constructEntry(getData('/all')))
}

//import sass files
import './styles/_base.scss'
import './styles/container.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/results.scss'

//export .js files
export {
  postData,
  getData,
  constructEntry
}