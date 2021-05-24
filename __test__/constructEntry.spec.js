//create in-memory HTML
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

//miniturized version of the constructEntry function in src/client/js.
function constructEntry (element, data) {
  if (data.status.msg == "OK") {
    const entry = element;
    entry.innerHTML = `${data.subjectivity}`
  } else {
    console.log("Invalid entry")
  }
}

//If status.msg = "OK", then document should be updated with the contents of the
//input data
describe('Test if UI is updated', () => {
  test('Document should update', () => {
    const dom = new JSDOM(`<!DOCTYPE html><body><section id="entry"></section></body>`)
    const newEntry = dom.window.document.getElementById('entry');
    const data = {status: {msg: "OK"}, subjectivity: "subjective"};
    constructEntry(newEntry, data)
    expect(newEntry.innerHTML).toBe(`subjective`);
  });
})