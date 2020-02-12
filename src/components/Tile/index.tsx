import React from 'react'
import './style.css'

type TileProps = {
  row: string
  column: string
  marker: string
}

export default class Tile extends React.Component<TileProps> {
  render() {
    const { row, column, marker } = this.props
    return (
      <div className={`tile ${row} ${column}`}>
        <div className='tile-content'>{marker}</div>
      </div>
    )
  }
}
