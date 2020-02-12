import { Board, Move } from './types'

export function getComputerMove (board: Board) {
  const emptySpaces = getEmptySpaces(board)
  const i = Math.floor(Math.random() * getEmptySpaces(board).length)
  return emptySpaces[i]
}

function getEmptySpaces(board: Board) {
  const emptySpaces: Move[] = []
  for (let i = 0; i < board.length; i++) {
    if (board[i] === '') {
      emptySpaces.push(i as Move)
    }
  }
  return emptySpaces
}
