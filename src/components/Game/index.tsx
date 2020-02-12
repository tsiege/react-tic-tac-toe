import React from 'react'
import './style.css'
import Board from '../Board'
import { Board as BoardType } from '../../utils/types'

type GameState = {
  board: BoardType
}

export default class Game extends React.Component<{}, GameState> {
  constructor(props: any) {
    super(props)
    this.state = {
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ]
    }
  }

  render() {
    const { board } = this.state
    return (
      <Board board={board}/>
    )
  }
}
