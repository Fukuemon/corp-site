import { render, screen } from '@testing-library/react'

import { Suppliers } from './SuppliersContainer'

test('renders Suppliers component', () => {
  render(<Suppliers />)

  const titleElement = screen.getByRole('heading', { level: 1, name: /Suppliers Component/i })

  expect(titleElement).toBeInTheDocument()
})
