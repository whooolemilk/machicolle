import { StoryObj, ComponentMeta } from '@storybook/react'
import { ButtonSecondary } from '@/components/Buttons'

export default {
  component: ButtonSecondary,
  argTypes: {
    children: {
      description: 'ボタンのラベル'
    }
  },
  render: (args) => {
    return <ButtonSecondary {...args}></ButtonSecondary>
  }
} as ComponentMeta<typeof ButtonSecondary>

export const Default: StoryObj = {
  args: {
    children: 'ボタンのラベルが入ります'
  }
}
