import type { Decorator, Meta, StoryObj } from '@storybook/vue3'
import { expect } from 'storybook/test'
import LunchWidget from './LunchWidget.vue'

const widgetDecorator: Decorator = (_story, context) => ({
  template: `<div class="home-surface" style="${context.args.size === 'medium' ? 'width:340px;height:220px' : 'width:500px;height:320px'}"><story /></div>`,
})

const meta = {
  title: 'Home Widgets/Lunch',
  component: LunchWidget,
  tags: ['autodocs'],
  decorators: [widgetDecorator],
  argTypes: { size: { control: 'select', options: ['medium', 'large'] } },
  args: { size: 'large' },
} satisfies Meta<typeof LunchWidget>

export default meta
type Story = StoryObj<typeof meta>

export const Medium: Story = { args: { size: 'medium' } }
export const Large: Story = {
  args: { size: 'large' },
  play: async ({ canvasElement }) => {
    await expect(canvasElement).toBeInTheDocument()
  },
}
