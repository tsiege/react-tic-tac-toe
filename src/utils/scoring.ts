import { Board, Tile } from './types'

type Row = [Tile , Tile, Tile]

export function findWinner(board: Board) {
  return findHorizontalWinner(board) || findDiagonalWinner(board) || findVerticalWinner(board)
}

export function isTie(board: Board) {
  if (!!findWinner(board)) {
    return false
  }
  return board.filter(tile => tile !== '').length === board.length
}

export function isGameOver(board: Board) {
  return !!findWinner(board) || isTie(board)
}

function findWinnerInRows(rows: Row[]) {
  for (let [first, second, third] of rows) {
    if (first !== '' && first === second && second === third) {
      return first
    }
  }
}

function findHorizontalWinner(board: Board) {
  const rows: Row[] = [
    board.slice(0, 3) as Row,
    board.slice(3, 6) as Row,
    board.slice(6, 9) as Row
  ]
  return findWinnerInRows(rows)
}

function findDiagonalWinner(board: Board) {
  const rows: Row[] = [
    [board[0], board[4], board[8]],
    [board[2], board[4], board[6]],
  ]
  return findWinnerInRows(rows)
}

function findVerticalWinner(board: Board) {
  const rows: Row[] = [
    [board[0], board[3], board[6]],
    [board[1], board[4], board[7]],
    [board[2], board[5], board[8]],
  ]
  return findWinnerInRows(rows)
}
