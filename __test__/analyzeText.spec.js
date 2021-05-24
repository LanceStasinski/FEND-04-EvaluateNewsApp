function analyzeText () {
  let input = document.getElementById('web-url').value;
  console.log(input);
  myLibrary.postData(input)
}

//try jsdom here
describe('Test if function is defined', () => {
  test('Should be defined', () => {
   expect(analyzeText).toBeDefined();
  });
})