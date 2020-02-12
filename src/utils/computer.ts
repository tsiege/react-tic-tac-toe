import { Board, Move } from './types'
import { getEmptySpaces, pickRandomElement } from './helpers'

export function getComputerMove(board: Board) {
  const emptySpaces = getEmptySpaces(board)
  return pickRandomElement<Move>(emptySpaces)
}
