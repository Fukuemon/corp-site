import { render, screen } from '@testing-library/react'

import { Products } from './ProductsContainer'

test('renders Products component', () => {
  render(<Products />)

  const titleElement = screen.getByRole('heading', { level: 1, name: /Products Component/i })

  expect(titleElement).toBeInTheDocument()
})
