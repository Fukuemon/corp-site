import { render, screen } from '@testing-library/react'

import { GridData } from './GridData'

test('renders GridData component', () => {
  render(<GridData dataItems={['item1', 'item2', 'item3']} />)

  const titleElement = screen.getByRole('heading', { level: 1, name: /GridData Component/i })

  expect(titleElement).toBeInTheDocument()
})
