import { SuppliersPresenter } from './SuppliersPresenter'

import type { Meta, StoryObj } from '@storybook/react'

type T = typeof SuppliersPresenter

export default {
  component: SuppliersPresenter
} satisfies Meta<T>

type Story = StoryObj<T>

export const Default: Story = {
  args: {}
}
