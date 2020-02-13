import React from 'react'
import { render } from '@testing-library/react'
import Board from '.'

test('renders the board', () => {
  const { getByText } = render(<Board board={['', '', '', '', '', '', '', '', 'X']} userTurn={()=>{}} />)
  const boardElement = getByText(/X/i)
  expect(boardElement).toBeInTheDocument()
})
