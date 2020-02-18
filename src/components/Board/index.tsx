import React from 'react'
import { Board as BoardType, Move } from '../../utils/types'
import './style.css'

type BoardProps = {
  userTurn: (choice: Move) => any
  board: BoardType
}

const ROWS = ['top', 'center', 'bottom']
const COLUMNS = ['left', 'middle', 'right']

const classNames = ROWS
  .map(r => COLUMNS.map(c => `${r} ${c}`))
  .reduce((acc, arr) => [...acc, ...arr], [])

export default class Board extends React.Component<BoardProps> {
  renderBoard() {
    const { board, userTurn } = this.props
    const tiles: JSX.Element[] = []
    for (let i: Move = 0; i < 9; i++) {
      const className = classNames[i]
      const marker = board[i]
      const onClick = marker === '' ? () => userTurn(i) : () => {}
      tiles.push(
        <div key={i} className={`tile ${className}`} onClick={onClick}>
          <div className='tile-content'>{marker}</div>
        </div>
      )
    }
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
