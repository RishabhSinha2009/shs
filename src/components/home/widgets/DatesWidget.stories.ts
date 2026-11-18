import type { Decorator, Meta, StoryObj } from '@storybook/vue3'
import DatesWidget from './DatesWidget.vue'

const widgetDecorator: Decorator = (_story, context) => {
  const size = context.args.size
  const width = size === 'small' ? 170 : size === 'medium' ? 340 : 500
  const height = size === 'small' ? 170 : size === 'medium' ? 220 : 320
  return { template: `<div class="home-surface" style="width:${width}px;height:${height}px"><story /></div>` }
}

const meta = {
  title: 'Home Widgets/Breaks & Dates',
  component: DatesWidget,
  tags: ['autodocs'],
  decorators: [widgetDecorator],
  argTypes: { size: { control: 'select', options: ['small', 'medium', 'large'] } },
  args: { size: 'medium' },
} satisfies Meta<typeof DatesWidget>

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = { args: { size: 'small' } }
export const Medium: Story = { args: { size: 'medium' } }
export const Large: Story = { args: { size: 'large' } }
