import React from 'react'
import './style.css'
import Board from '../Board'
import { Board as BoardType, Move } from '../../utils/types'
import Options from '../Options'
import { getComputerMove } from '../../utils/computer'

type GameState = {
  hasLost: boolean
  hasTied: boolean
  hasGameStarted: boolean
  board: BoardType
}

function blankState(): GameState {
  return {
    hasLost: false,
    hasTied: false,
    hasGameStarted: false,
    board: [
      '', '', '',
      '', '', '',
      '', '', ''
    ]
  }
}

export default class Game extends React.Component<{}, GameState> {
  constructor(props: any) {
    super(props)
    this.state = blankState()
  }

  resetGame() {
    this.setState(blankState())
  }

  startGame(player: 'computer' | 'human') {
    this.setState({ hasGameStarted: true })
    if (player === 'computer') {
      return this.computerTurn()
    }
  }

  computerTurn() {
    // typescript is upset and needs the casting
    const board = [...this.state.board] as BoardType
    const move = getComputerMove(board)
    board[move] = 'O'
    this.setState({ board })
  }

  async userTurn(move: Move) {
    // typescript is upset and needs the casting
    const board = [...this.state.board] as BoardType
    board[move] = 'X'
    await this.setState({ board })
    this.computerTurn()
  }

  render() {
    const { board, hasGameStarted } = this.state
    const resetGame = this.resetGame.bind(this)
    const startGame = this.startGame.bind(this)
    const userTurn = this.userTurn.bind(this)
    return (
      <div>
        <Board board={board} userTurn={userTurn}/>
        <Options
          hasGameStarted={hasGameStarted}
          resetGame={() => resetGame()}
          startGame={(choice) => startGame(choice)}
        />
      </div>
    )
  }
}
