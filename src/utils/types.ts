export type Computer = 'O'
export const COMPUTER = 'O'
export type Human = 'X'
export const HUMAN = 'X'
export type Empty = ''
export const EMPTY = ''
export type Player = Human | Computer
type Tile = Empty | Player

export type Board = [
  Tile, Tile, Tile,
  Tile, Tile, Tile,
  Tile, Tile, Tile
]

export type Move = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

