import type { Decorator, Meta, StoryObj } from '@storybook/vue3'
import { expect } from 'storybook/test'
import PwcWidget from './PwcWidget.vue'

const widgetDecorator: Decorator = (_story, context) => {
  const small = context.args.size === 'small'
  return { template: `<div class="home-surface" style="width:${small ? 170 : 340}px;height:${small ? 170 : 220}px"><story /></div>` }
}

const meta = {
  title: 'Home Widgets/PWC',
  component: PwcWidget,
  tags: ['autodocs'],
  decorators: [widgetDecorator],
  argTypes: { size: { control: 'select', options: ['small', 'medium'] } },
  args: { size: 'small' },
} satisfies Meta<typeof PwcWidget>

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = { args: { size: 'small' } }
export const Medium: Story = {
  args: { size: 'medium' },
  play: async ({ canvasElement }) => {
    await expect(canvasElement).toBeInTheDocument()
  },
}
