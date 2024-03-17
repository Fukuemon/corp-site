import { render, screen } from '@testing-library/react'

import { ServiceContents } from './ServiceContents'

test('renders ServiceContents component', () => {
  render(<ServiceContents />)

  const titleElement = screen.getByRole('heading', { level: 1, name: /ServiceContents Component/i })

  expect(titleElement).toBeInTheDocument()
})
