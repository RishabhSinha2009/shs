import type { Decorator, Meta, StoryObj } from '@storybook/vue3'
import MyLinksWidget from './MyLinksWidget.vue'

const widgetDecorator: Decorator = (_story, context) => {
  const size = context.args.size
  const width = size === 'small' ? 170 : size === 'medium' ? 340 : 500
  const height = size === 'small' ? 170 : size === 'medium' ? 220 : 320
  return { template: `<div class="home-surface" style="width:${width}px;height:${height}px"><story /></div>` }
}

const meta = {
  title: 'Home Widgets/My Links',
  component: MyLinksWidget,
  tags: ['autodocs'],
  decorators: [widgetDecorator],
  argTypes: { size: { control: 'select', options: ['small', 'medium', 'large'] } },
  args: { size: 'medium' },
  beforeEach() {
    localStorage.setItem('myLinks', JSON.stringify([
      { id: 'room', name: 'ILC Room Booking', url: 'https://example.com/booking', color: '#2563eb' },
      { id: 'club', name: 'Club Sign-in', url: 'https://example.com/signin', color: '#db2777' },
      { id: 'calendar', name: 'Project Calendar', url: 'https://example.com/calendar', color: '' },
    ]))
  },
} satisfies Meta<typeof MyLinksWidget>

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = { args: { size: 'small' } }
export const Medium: Story = { args: { size: 'medium' } }
export const Large: Story = { args: { size: 'large' } }
