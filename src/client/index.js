//import js files
import { postData } from './js/postData'
import { getData } from './js/getData'
import { constructEntry } from './js/constructEntry'

//generate NLP results when button is clicked
const button = document.getElementById('submit');
button.addEventListener('click', Client.analyzeText());

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