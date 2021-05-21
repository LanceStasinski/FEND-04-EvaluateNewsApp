//post user-entered data to server
function postData(data) {
  fetch('http://localhost:3030/add', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({url: data})
  })
  .then((response) => response.json())
  .then((response) => {
    console.log(response)
    myLibrary.constructEntry(response)
  })
}

export { postData }