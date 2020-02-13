import React from 'react'
import './style.css'
import { Board as BoardType, Move } from '../../utils/types'
import Tile from '../Tile'

type BoardProps = {
  userTurn: (choice: Move) => any
  board: BoardType
}

const ROWS = ['top', 'center', 'bottom']
const COLUMNS = ['left', 'middle', 'right']
export default class Board extends React.Component<BoardProps> {
  renderBoard() {
    const { board, userTurn } = this.props
    const tiles: any[] = []
    let i: Move = 0
    ROWS.forEach(row => {
      COLUMNS.forEach(col => {
        const marker = board[i]
        const move = i
        tiles.push(<Tile
          key={`${row}:${col}`}
          row={row}
          column={col}
          marker={marker}
          onClick={marker === '' ? () => userTurn(move) : () => {}}
        />)
        i++
      })
    })
    return tiles
  }
  render() {
    return (
      <section className='board'>
        {this.renderBoard()}
      </section>
    )
  }
}
