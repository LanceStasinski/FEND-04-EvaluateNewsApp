import { postData } from '../src/client/js/postData'

describe('Post request to server', () => {
  test('it should be a defined', () => {
    expect(postData).toBeDefined();
  })
})