import { getComputerMove } from './computer'

test('getComputerMove returns a valid move', () => {
  expect(getComputerMove(['', 'O', 'X', 'O', 'X', 'X', 'O', 'O', 'X'])).toBe(0)
  expect(getComputerMove(['O', 'O', 'X', 'O', 'X', 'X', 'O', 'O', ''])).toBe(8)
  expect(getComputerMove(['O', 'O', 'X', 'O', '', 'X', 'O', 'O', 'X'])).toBe(4)
  expect(getComputerMove(['O', 'O', 'X', 'O', 'X', 'X', 'O', 'O', 'X'])).toBe(undefined)
})
