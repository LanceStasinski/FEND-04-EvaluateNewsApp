import { analyzeText } from '../src/client/js/analyzeText'
//try jsdom here
describe('Test if function is defined', () => {
  test('Should be defined', () => {
   expect(analyzeText()).toBeDefined();
  });
})