import React from 'react'
import { render } from '@testing-library/react'
import Announcements from '.'

test('renders announcements', () => {
  const { getByText } = render(<Announcements isGameOver={true}/>)
  const announcementsElement = getByText(/Tie/i)
  expect(announcementsElement).toBeInTheDocument()
})
