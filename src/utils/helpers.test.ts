import { getEmptySpaces } from './helpers'

test('getEmptySpaces returns a valid move', () => {
  expect(getEmptySpaces(['', 'O', 'X', 'O', 'X', 'X', 'O', 'O', ''])).toEqual([0, 8])
  expect(getEmptySpaces(['O', 'O', 'X', 'O', 'X', 'X', 'O', 'O', ''])).toEqual([8])
  expect(getEmptySpaces(['O', 'O', 'X', 'O', '', 'X', 'O', 'O', 'X'])).toEqual([4])
  expect(getEmptySpaces(['O', 'O', 'X',  'O', 'X', 'X', 'O', 'O', 'X'])).toEqual([])
})
