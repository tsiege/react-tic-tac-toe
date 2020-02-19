import { getComputerMove } from './computer'

describe('getComputerMove', () => {
  describe('Easy Mode', () => {
    test('returns a valid move', () => {
      expect(getComputerMove({ board: ['', 'O', 'X', 'O', 'X', 'X', 'O', 'O', 'X'] })).toBe(0)
      expect(getComputerMove({ board: ['O', 'O', 'X', 'O', 'X', 'X', 'O', 'O', ''] })).toBe(8)
      expect(getComputerMove({ board: ['O', 'O', 'X', 'O', '', 'X', 'O', 'O', 'X'] })).toBe(4)
      expect(getComputerMove({ board: ['O', 'O', 'X', 'O', 'X', 'X', 'O', 'O', 'X'] })).toBe(undefined)
    })
  })
  describe('Hard Mode', () => {
    test(`plays in the center when user's first move is a corner`, () => {
      const move = getComputerMove({ board: ['X','','', '','','', '','',''], isHard: true })
      expect(move).toBe(4)
    })
    test(`plays in any corner when user's first move is the center`, () => {
      const move = getComputerMove({ board: ['','','','','X','','','',''], isHard: true })
      expect([0, 2, 6, 8]).toContain(move)
    })
    test('blocks the user from winning', () => {
      const move = getComputerMove({ board: ['','','','','O','','','X','X'], isHard: true })
      // ['','','','','O','','O','X','X']
      expect(move).toBe(6)
    })
    test('completes a horizontal win', () => {
      const move = getComputerMove({ board: ['O','O','','X','X','','O','X','X'], isHard: true })
      // ['O','O','O','X','X','','O','X','X']
      expect(move).toBe(2)
    })
    test('completes a vertical win', () => {
      const move = getComputerMove({ board: ['O','O','X','','X','','O','X','X'], isHard: true })
      // ['O','O','X','O','X','','O','X','X']
      expect(move).toBe(3)
    })
    test('completes a diagonal win', () => {
      const move = getComputerMove({ board: ['O','X','O','X','','X','O','','X'], isHard: true })
      // ['O','X','O','X','O','X','O','','X']
      expect(move).toBe(4)
    })
    test('prioritizes winning over blocking', () => {
      const move = getComputerMove({ board: ['X','O','X','X','O','X','','','O'], isHard: true })
      // ['X','O','X','X','O','X','','O','O']
      expect(move).toBe(7)
    })
    test('prioritizes winning over setting up', () => {
      const move = getComputerMove({ board: ['O','','','','O','X','','X',''], isHard: true })
      // ['O','','','','O','X','','X','O']
      expect(move).toBe(8)
    })
  })
})


