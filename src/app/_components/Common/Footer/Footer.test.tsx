import { render, screen } from '@testing-library/react'

import { Footer } from './Footer'

test('renders Footer component', () => {
  render(<Footer />)

  const titleElement = screen.getByRole('heading', { level: 1, name: /Footer Component/i })

  expect(titleElement).toBeInTheDocument()
})
