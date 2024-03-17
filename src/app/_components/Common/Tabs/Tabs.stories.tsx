import TabsPresenter from './TabsPresenter'

import type { Meta, StoryObj } from '@storybook/react'

type T = typeof TabsPresenter

export default {
  component: TabsPresenter
} satisfies Meta<T>

type Story = StoryObj<T>

export const Default: Story = {
  args: {}
}
