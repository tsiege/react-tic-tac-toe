import React from 'react'
import './style.css'

type TileProps = {
  row: string
  column: string
  marker: string
  onClick: any
}

export default class Tile extends React.Component<TileProps> {
  render() {
    const { row, column, marker, onClick } = this.props
    return (
      <div className={`tile ${row} ${column}`} onClick={onClick}>
        <div className='tile-content'>{marker}</div>
      </div>
    )
  }
}
