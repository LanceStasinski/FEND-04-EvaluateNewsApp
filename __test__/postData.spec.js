const fetch = require("node-fetch");
//test if error is returned if the fetch request cannot reach the local server
async function postData(data) {
  try{
    await fetch('http://localhost:3030/add', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({url: data})
    })
    .then((response) => response.json())

  } catch (error) {
    const er = error;
    return er;
  }
}

describe('Post request to server', () => {
  test('Error should be defined when server is not running', async () => {
    const err = await postData("string");
    expect(err).toBeDefined();
  })
})