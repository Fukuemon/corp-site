import { render, screen } from '@testing-library/react'

import { NavigationBar } from './NavigationBarContainer'

test('renders NavigationBar component', () => {
  render(<NavigationBar />)

  const titleElement = screen.getByRole('heading', { level: 1, name: /NavigationBar Component/i })

  expect(titleElement).toBeInTheDocument()
})
