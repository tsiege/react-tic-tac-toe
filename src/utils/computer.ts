import maxBy from 'lodash.maxby'
import minBy from 'lodash.minby'
import { Board, Move, EMPTY, COMPUTER, HUMAN, Player } from './types'
import { getEmptySpaces, pickRandomElement } from './helpers'
import { isGameOver, findWinner } from './scoring'

interface MinimaxMove {
  move?: Move
  score?: number
}

export function getComputerMove({ board, isHard = false }: { board: Board, isHard?: boolean }) {
  return isHard ? getHardMove(board) : getEasyMove(board)
}

function getEasyMove(board: Board) {
  const emptySpaces = getEmptySpaces(board)
  return pickRandomElement<Move>(emptySpaces)
}

function getHardMove(board: Board): Move | undefined {
  //if middle tile isn't taken take it
  if (board[4] === EMPTY) {
    return 4
  }
  //only the middle is taken, take a corner
  if (getEmptySpaces(board).length === 8) {
    return pickRandomElement<Move>([0, 2, 6, 8])
  }
  //no short cut available, run minimax algo
  const { move } = minimax(board)
  return move
}

// the minimax algorithm which with returns a move and the score for that move
function minimax(board: Board, player: Player = COMPUTER, depth = 0): MinimaxMove {
  let moves: MinimaxMove[] = []
  let emptySpaces = getEmptySpaces(board)
  //base case to break recursion
  if (!emptySpaces.length) {
    return { move: undefined }
  }
  //set adversary for recursive calls
  const adversary: Player = player === COMPUTER ? HUMAN : COMPUTER
  depth++
  //iterate through potential moves
  for (let spaceIndex = 0; emptySpaces.length > spaceIndex; spaceIndex++) {
    let score
    //select a move to try
    let move = emptySpaces[spaceIndex]
    //store original tile to reset board
    let originalTile = board[move]
    //take selected move
    board[move] = player
    if (isGameOver(board)) {
      score = scoreGame(board, depth)
    } else {
      //if game is not over keep going...
      score = minimax(board, adversary, depth).score
    }
    moves.push({ score, move })
    board[move] = originalTile
  }

  if (player === COMPUTER && moves.length > 0) {
    //if player is computer the best move it can make
    return maxBy(moves, (obj) => obj.score) as MinimaxMove
  } else {
    //if player is human the best move it can make
    //AKA the worst move for the computer
    return minBy(moves, (obj) => obj.score) as MinimaxMove
  }
}

function scoreGame(board: Board, depth: number) {
  const winner = findWinner(board)
  const multiplier = winner === COMPUTER ? 1 : -1
  return !!winner ? (10 - depth) * multiplier : 0
}
