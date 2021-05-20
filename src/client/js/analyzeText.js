(function analyzeText () {
  const button = document.getElementById('submit');
  button.addEventListener('click', compileEntry());
  function compileEntry () {
    const input = document.getElementById('web-url').value;
    Client.postData('/add', input)
    .then(Client.getData('/all'))
  }
})()

export { analyzeText }