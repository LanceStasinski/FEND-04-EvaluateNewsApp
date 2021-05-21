//post user-entered data to server
const postData = async (url = '', data = "") =>{
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({url: data})
  });
  try {
    const newData = await response.json();
    myLibrary.constructEntry(newData);
  } catch(error) {
    console.log('error', error);
    alert("Cannot post to server");
  }
}

export { postData }