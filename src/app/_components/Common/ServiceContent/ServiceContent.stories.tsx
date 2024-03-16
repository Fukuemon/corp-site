import { ServiceContent } from './ServiceContent'

import type { Meta, StoryObj } from '@storybook/react'

type T = typeof ServiceContent

export default {
  component: ServiceContent
} satisfies Meta<T>

type Story = StoryObj<T>

export const Default: Story = {
  args: {}
}
