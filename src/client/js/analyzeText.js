function analyzeText (event) {
  event.preventDefault();
  const input = document.getElementById('web-url').value;
  myLibrary.postData('http://localhost:3030/add', input)
  .then(myLibrary.getData('http://localhost:3030/all'))
}

export { analyzeText }