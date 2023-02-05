import { StoryObj, ComponentMeta } from '@storybook/react'
import { ButtonMain } from '@/components/Buttons'

export default {
  component: ButtonMain,
  argTypes: {
    children: {
      description: 'ボタンのラベル'
    }
  },
  render: (args) => {
    return <ButtonMain {...args}></ButtonMain>
  }
} as ComponentMeta<typeof ButtonMain>

export const Default: StoryObj = {
  args: {
    children: 'ボタンのラベルが入ります'
  }
}
