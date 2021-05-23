function analyzeText (event) {
  event.preventDefault();
  let input = document.getElementById('web-url').value;
  console.log(input);
  myLibrary.postData(input)
}

const submit = document.getElementById('submit')
if (submit) {
  submit.addEventListener('click', analyzeText)
}

export { analyzeText }