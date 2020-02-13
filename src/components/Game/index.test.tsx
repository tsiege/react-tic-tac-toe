import React from 'react'
import { render } from '@testing-library/react'
import Game from '.'

test('renders the game', () => {
  const { getByText } = render(<Game />)
  const gameElement = getByText(/Which/i)
  expect(gameElement).toBeInTheDocument()
})
