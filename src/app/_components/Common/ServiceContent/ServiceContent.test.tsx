import { render, screen } from '@testing-library/react'

import { SERVICES_CONTENTS } from '../ServiceContents/ServiceContents'

import { ServiceContent } from './ServiceContent'

test('renders ServiceContent component', () => {
  render(<ServiceContent {...SERVICES_CONTENTS[3]!} />)

  const titleElement = screen.getByRole('heading', { level: 1, name: /ServiceContent Component/i })

  expect(titleElement).toBeInTheDocument()
})
