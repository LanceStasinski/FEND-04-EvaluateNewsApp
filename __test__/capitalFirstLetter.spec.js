import { capitalFirstLetter } from '../src/client/js/capitalFirstLetter'

describe('capitalize first letter', () => {
  test('it should capitalize the first letter and lowercase the rest', () => {
    expect(capitalFirstLetter('WORD')).toBe('Word');
  })
})