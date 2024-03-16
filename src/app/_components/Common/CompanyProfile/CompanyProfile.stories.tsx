import { CompanyProfile } from './CompanyProfile'

import type { Meta, StoryObj } from '@storybook/react'

type T = typeof CompanyProfile

export default {
  component: CompanyProfile
} satisfies Meta<T>

type Story = StoryObj<T>

export const Default: Story = {
  args: {}
}
