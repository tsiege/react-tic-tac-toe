import { findWinner, isTie } from './scoring'

test('findWinner finds winners in rows', () => {
  expect(findWinner(['', '', '', '', '', '', '', '', ''])).toBe(undefined)
  expect(findWinner(['O', '', '', 'X', '', 'X', 'O', '', ''])).toBe(undefined)
  // horizontal
  expect(findWinner(['O', '', '', 'X', 'X', 'X', 'O', '', ''])).toBe('X')
  // diagonal
  expect(findWinner(['O', '', 'X', 'X', 'O', '', '', '', 'O'])).toBe('O')
  expect(findWinner(['', '', 'X', 'O', 'X', '', 'X', '', 'O'])).toBe('X')
  // vertical
  expect(findWinner(['O', '', 'X', 'O', 'X', '', 'O', 'O', ''])).toEqual('O')
})

test('isTie finds if it\'s a tie', () => {
  expect(isTie(['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', 'O'])).toEqual(true)
  expect(isTie(['', '', '', '', '', '', '', '', ''])).toBe(false)
  expect(isTie(['O', '', '', 'X', '', 'X', 'O', '', ''])).toBe(false)
  // horizontal
  expect(isTie(['O', '', '', 'X', 'X', 'X', 'O', '', ''])).toBe(false)
  // diagonal
  expect(isTie(['O', '', 'X', 'X', 'O', '', '', '', 'O'])).toBe(false)
  expect(isTie(['', '', 'X', 'O', 'X', '', 'X', '', 'O'])).toBe(false)
  // vertical
  expect(isTie(['O', '', 'X', 'O', 'X', '', 'O', 'O', ''])).toEqual(false)
})
