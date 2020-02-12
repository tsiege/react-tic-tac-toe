import React from 'react'
import './style.css'
import Board from '../Board'
import { Board as BoardType } from '../../utils/types'
import Options from '../Options'

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
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
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
    console.log(player)
    this.setState({ hasGameStarted: true })
  }

  render() {
    const { board, hasGameStarted } = this.state
    const resetGame = this.resetGame.bind(this)
    const startGame = this.startGame.bind(this)
    return (
      <div>
        <Board board={board}/>
        <Options
          hasGameStarted={hasGameStarted}
          resetGame={() => resetGame()}
          startGame={(choice) => startGame(choice)}
        />
      </div>
    )
  }
}
