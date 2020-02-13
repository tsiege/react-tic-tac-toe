import React from 'react'
import Board from '../Board'
import Options from '../Options'
import { getComputerMove } from '../../utils/computer'
import { isTie, findWinner } from '../../utils/scoring'
import { Board as BoardType, Move, Player, COMPUTER, HUMAN } from '../../utils/types'
import './style.css'
import Announcements from '../Announcements'

interface GameState {
  isGameOver: boolean
  isHard?: boolean
  winner?: Player
  hasGameStarted: boolean
  board: BoardType
}

function blankState(): GameState {
  return {
    isGameOver: false,
    isHard: undefined,
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

  resetGame = () => {
    this.setState(blankState())
  }

  startGame = async ({ player, isHard }: { player: Player, isHard: boolean }) => {
    await this.setState({ hasGameStarted: true, isHard })
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
    const { board: ogBoard, isGameOver, isHard } = this.state
    if (isGameOver) {
      return
    }
    // typescript is upset and needs the casting
    const board = [...ogBoard] as BoardType
    const move = getComputerMove({ board, isHard })
    if (move !== undefined) {
      await this.makeMove(move, COMPUTER)
    }
    await this.checkForEndOfGame()
  }

  userTurn = async (move: Move) => {
    // typescript is upset and needs the casting
    await this.makeMove(move, HUMAN)
    await this.checkForEndOfGame()
    this.computerTurn()
  }

  render() {
    const { board, hasGameStarted, isGameOver, winner, isHard } = this.state
    const userTurn = hasGameStarted && !isGameOver ? this.userTurn : () => {}
    return (
      <div>
        <Announcements isGameOver={isGameOver} winner={winner} />
        <Options
          isHard={isHard}
          hasGameStarted={hasGameStarted}
          resetGame={() => this.resetGame()}
          startGame={(args) => this.startGame(args)}
        />
        <Board board={board} userTurn={userTurn}/>
      </div>
    )
  }
}
