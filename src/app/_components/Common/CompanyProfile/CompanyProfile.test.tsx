import { render, screen } from '@testing-library/react'

import { CompanyProfile } from './CompanyProfile'

test('renders CompanyProfile component', () => {
  render(<CompanyProfile />)

  const titleElement = screen.getByRole('heading', { level: 1, name: /CompanyProfile Component/i })

  expect(titleElement).toBeInTheDocument()
})
