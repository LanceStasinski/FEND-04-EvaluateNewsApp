//This function puts all the pieces together. When the user clicks submit, the
//input will be sent to the server via post request. On the server side, a post
//request is made to the meaningcloud api. The response from meaningcloud is
//then sent back to the client and the UI is updated with results of the NLP
//analysis.

function analyzeText () {
  let input = document.getElementById('web-url').value;
  console.log(input);
  myLibrary.postData(input)
}

//add event listener to submit button
document.getElementById('submit').addEventListener('click', analyzeText)


export { analyzeText }