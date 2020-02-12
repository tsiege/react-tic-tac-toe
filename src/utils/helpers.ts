import { Board, Move } from './types'

export function getEmptySpaces(board: Board) {
  const emptySpaces: Move[] = []
  for (let i = 0; i < board.length; i++) {
    if (board[i] === '') {
      emptySpaces.push(i as Move)
    }
  }
  return emptySpaces
}
