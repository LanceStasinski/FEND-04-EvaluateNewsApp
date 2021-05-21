function analyzeText () {
  const input = document.getElementById('web-url').value;
  myLibrary.postData('/add', input)
  .then(myLibrary.getData('/all'))
}

export { analyzeText }