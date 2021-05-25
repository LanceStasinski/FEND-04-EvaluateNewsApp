const fetch = require("node-fetch");
//test if post request is sent to server. Error should be undefined if request
//goes through
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

//NOTE: this test will only pass if the server is running
describe('Post request to server', () => {
  test('Error should be undefined when server is running', async () => {
    const err = await postData("string");
    expect(err).toBeUndefined();
  })
})