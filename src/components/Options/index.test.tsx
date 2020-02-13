import React from 'react'
import { render } from '@testing-library/react'
import Options from '.'

test('renders options', () => {
  const { getByText } = render(<Options hasGameStarted={false} resetGame={()=>{}} startGame={()=>{}}/>)
  const optionsElement = getByText(/Which/i)
  expect(optionsElement).toBeInTheDocument()
})
