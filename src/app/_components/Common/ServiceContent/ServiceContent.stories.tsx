import { Wrench } from 'lucide-react'

import { ServiceContent, ServiceContentProps } from './ServiceContent'

import type { Meta, StoryObj } from '@storybook/react'

type T = typeof ServiceContent

export default {
  component: ServiceContent
} satisfies Meta<T>

type Story = StoryObj<T>

const serviceContent: ServiceContentProps = {
  icon: <Wrench />,
  content: (
    <p>
      機械工具及び省力化機器
      <br />
      伝動機器の販売
    </p>
  )
}

export const Default: Story = {
  args: { ...serviceContent }
}
