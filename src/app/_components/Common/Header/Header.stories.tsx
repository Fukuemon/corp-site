import { Header } from './Header'

import type { Meta, StoryObj } from '@storybook/react'

type T = typeof Header

export default {
  component: Header
} satisfies Meta<T>

type Story = StoryObj<T>

export const Default: Story = {
  args: {}
}
