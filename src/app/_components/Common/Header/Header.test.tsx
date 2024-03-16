import { render, screen } from '@testing-library/react'

import { Header } from './Header'

test('renders Header component', () => {
  render(<Header />)

  const titleElement = screen.getByRole('heading', { level: 1, name: /Header Component/i })

  expect(titleElement).toBeInTheDocument()
})
