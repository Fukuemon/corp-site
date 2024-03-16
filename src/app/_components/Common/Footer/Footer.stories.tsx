import { Footer } from './Footer'

import type { Meta, StoryObj } from '@storybook/react'

type T = typeof Footer

export default {
  component: Footer
} satisfies Meta<T>

type Story = StoryObj<T>

export const Default: Story = {
  args: {}
}
