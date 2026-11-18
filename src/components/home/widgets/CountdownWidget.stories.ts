import type { Decorator, Meta, StoryObj } from '@storybook/vue3'
import CountdownWidget from './CountdownWidget.vue'

const widgetDecorator: Decorator = (_story, context) => {
  const small = context.args.size === 'small'
  return { template: `<div class="home-surface" style="width:${small ? 170 : 340}px;height:${small ? 170 : 220}px"><story /></div>` }
}

const meta = {
  title: 'Home Widgets/Countdown',
  component: CountdownWidget,
  tags: ['autodocs'],
  decorators: [widgetDecorator],
  argTypes: { size: { control: 'select', options: ['small', 'medium'] } },
  args: {
    size: 'small',
    config: { title: 'Summer', date: '2027-05-28T15:00' },
  },
} satisfies Meta<typeof CountdownWidget>

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = { args: { size: 'small' } }
export const Medium: Story = { args: { size: 'medium' } }
