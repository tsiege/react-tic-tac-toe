import React from 'react'
import { render } from '@testing-library/react'
import Tile from '.'

test('renders a tile', () => {
  const { getByText } = render(<Tile row={'top'} column={'middle'} marker={'O'} onClick={()=>{}}/>)
  const tileElement = getByText(/O/i)
  expect(tileElement).toBeInTheDocument()
})
