function analyzeText (event) {
  event.preventDefault();
  let input = document.getElementById('web-url').value;
  console.log(input);
  myLibrary.postData(input)
}


document.getElementById('submit').addEventListener('click', analyzeText)


export { analyzeText }