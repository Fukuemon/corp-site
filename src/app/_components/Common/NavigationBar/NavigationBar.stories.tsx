import { navigationBar } from './NavigationBarContainer'
import { NavigationBarPresenter } from './NavigationBarPresenter'

import type { Meta, StoryObj } from '@storybook/react'

type T = typeof NavigationBarPresenter

export default {
  component: NavigationBarPresenter
} satisfies Meta<T>

type Story = StoryObj<T>

export const Default: Story = {
  args: { ...navigationBar }
}
