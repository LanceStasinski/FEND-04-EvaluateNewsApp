import { constructEntry } from '../src/client/js/constructEntry'

describe('Test if function is defined', () => {
  test('Should be defined', () => {
   expect(constructEntry).toBeDefined();
  });
})