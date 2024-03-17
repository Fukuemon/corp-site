import { ServiceContents } from './ServiceContents'

import type { Meta, StoryObj } from '@storybook/react'

type T = typeof ServiceContents

export default {
  component: ServiceContents
} satisfies Meta<T>

type Story = StoryObj<T>

export const Default: Story = {
  args: {}
}
