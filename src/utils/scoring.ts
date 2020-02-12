import { Board } from './types'

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


function findHorizontalWinner(board: Board) {
  const rows = [
    board.slice(0, 3),
    board.slice(3, 6),
    board.slice(6, 9)
  ]
  for (let [first, second, third] of rows) {
    if (first !== '' && first === second && second === third) {
      return first
    }
  }
}

function findDiagonalWinner(board: Board) {
  const middle = board[4]
  if (middle === '') {
    return
  }
  if (board[0] === middle && middle === board[8]) {
    return middle
  }
  if (board[2] === middle && middle === board[6]) {
    return middle
  }
}

function findVerticalWinner(board: Board) {
  const rows = [
    [board[0], board[3], board[6]],
    [board[1], board[4], board[7]],
    [board[2], board[5], board[8]],
  ]
  for (let [first, second, third] of rows) {
    if (first !== '' && first === second && second === third) {
      return first
    }
  }
}
