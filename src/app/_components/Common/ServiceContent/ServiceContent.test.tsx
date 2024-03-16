import { render, screen } from '@testing-library/react'

import { ServiceContent } from './ServiceContent'

test('renders ServiceContent component', () => {
  render(<ServiceContent />)

  const titleElement = screen.getByRole('heading', { level: 1, name: /ServiceContent Component/i })

  expect(titleElement).toBeInTheDocument()
})
