function analyzeText () {
  const input = document.getElementById('web-url').value;
  Client.postData('/add', input)
  .then(Client.getData('/all'))
}

export { analyzeText }