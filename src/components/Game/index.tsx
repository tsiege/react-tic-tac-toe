import React from 'react'
import Board from '../Board'
import Options from '../Options'
import { getComputerMove } from '../../utils/computer'
import { isTie, findWinner } from '../../utils/scoring'
import { Board as BoardType, Move, Player, COMPUTER, HUMAN } from '../../utils/types'
import './style.css'
import Announcement from '../Announcements'

type GameState = {
  isGameOver: boolean
  winner?: Player
  hasGameStarted: boolean
  board: BoardType
}

function blankState(): GameState {
  return {
    isGameOver: false,
    winner: undefined,
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

  startGame(player: Player) {
    this.setState({ hasGameStarted: true })
    if (player === COMPUTER) {
      return this.computerTurn()
    }
  }

  makeMove(move: Move, tile: Player) {
    const board = [...this.state.board] as BoardType
    board[move] = tile
    return this.setState({ board })
  }

  async checkForEndOfGame() {
    const { board } = this.state
    const winner = findWinner(board)
    if (winner) {
      return this.setState({ isGameOver: true, winner })
    }
    if (isTie(board)) {
      return this.setState({ isGameOver: true, })
    }
  }

  async computerTurn() {
    const { board: ogBoard, isGameOver } = this.state
    if (isGameOver) {
      return
    }
    // typescript is upset and needs the casting
    const board = [...ogBoard] as BoardType
    const move = getComputerMove(board)
    if (move !== undefined) {
      await this.makeMove(move, COMPUTER)
    }
    await this.checkForEndOfGame()
  }

  async userTurn(move: Move) {
    // typescript is upset and needs the casting
    await this.makeMove(move, HUMAN)
    await this.checkForEndOfGame()
    this.computerTurn()
  }

  render() {
    const { board, hasGameStarted, isGameOver, winner } = this.state
    const resetGame = this.resetGame.bind(this)
    const startGame = this.startGame.bind(this)
    const userTurn = hasGameStarted && !isGameOver ? this.userTurn.bind(this) : () => {}
    return (
      <div>
        <Announcement isGameOver={isGameOver} winner={winner} />
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
