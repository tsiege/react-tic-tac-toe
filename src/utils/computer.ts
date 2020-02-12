import { Board, Move } from './types'
import { getEmptySpaces } from './helpers'

export function getComputerMove(board: Board): Move | undefined {
  const emptySpaces = getEmptySpaces(board)
  const i = Math.floor(Math.random() * getEmptySpaces(board).length)
  return emptySpaces[i]
}
