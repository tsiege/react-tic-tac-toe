import React from 'react'
import { Board as BoardType, Move } from '../../utils/types'
import './style.css'

type BoardProps = {
  userTurn: (choice: Move) => any
  board: BoardType
}

const ROWS = ['top', 'center', 'bottom']
const COLUMNS = ['left', 'middle', 'right']
export default class Board extends React.Component<BoardProps> {
  renderBoard() {
    const { board, userTurn } = this.props
    const tiles: JSX.Element[] = []
    let i: Move = 0
    ROWS.forEach(row => {
      COLUMNS.forEach(column => {
        const marker = board[i]
        const move = i
        const onClick = marker === '' ? () => userTurn(move) : () => {}
        tiles.push(
          <div key={`${row}:${column}`} className={`tile ${row} ${column}`} onClick={onClick}>
            <div className='tile-content'>{marker}</div>
          </div>
        )
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
