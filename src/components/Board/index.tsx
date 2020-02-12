import React from 'react'
import './style.css'
import { Board as BoardType } from '../../utils/types'
import Tile from '../Tile'


type BoardProps = {
  board: BoardType
}

const ROWS = ['top', 'center', 'bottom']
const COLUMNS = ['left', 'middle', 'right']
export default class Board extends React.Component<BoardProps> {
  renderBoard() {
    const { board } = this.props
    const tiles: any[] = []
    ROWS.forEach((row, rowI) => {
      COLUMNS.forEach((col, colI) => {
        const marker = board[rowI][colI]
        tiles.push(<Tile
          key={`${row}:${col}`}
          row={row}
          column={col}
          marker={marker}
        />)
      })
    })
    return tiles
  }
  render() {
    return (
      <div className='holder'>
        {this.renderBoard()}
      </div>
    )
  }
}
