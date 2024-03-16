import { ProductsPresenter } from './ProductsPresenter'

import type { Meta, StoryObj } from '@storybook/react'

type T = typeof ProductsPresenter

export default {
  component: ProductsPresenter
} satisfies Meta<T>

type Story = StoryObj<T>

export const Default: Story = {
  args: {}
}
