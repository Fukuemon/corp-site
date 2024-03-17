import { GridData } from './GridData'

import type { Meta, StoryObj } from '@storybook/react'

type T = typeof GridData

export default {
  component: GridData
} satisfies Meta<T>

type Story = StoryObj<T>

export const Default: Story = {
  args: {}
}
