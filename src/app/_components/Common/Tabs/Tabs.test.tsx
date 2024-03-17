import { render, screen } from '@testing-library/react'

import Tabs from './TabsContainer'

test('renders Tabs component', () => {
  render(<Tabs />)

  const titleElement = screen.getByRole('heading', { level: 1, name: /Tabs Component/i })

  expect(titleElement).toBeInTheDocument()
})
