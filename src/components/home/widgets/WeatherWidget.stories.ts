import type { Decorator, Meta, StoryObj } from '@storybook/vue3'
import { expect } from 'storybook/test'
import WeatherWidget from './WeatherWidget.vue'

const widgetDecorator: Decorator = (_story, context) => {
  const size = context.args.size
  const width = size === 'small' ? 170 : size === 'medium' ? 340 : 500
  const height = size === 'small' ? 170 : size === 'medium' ? 220 : 320
  return { template: `<div class="home-surface" style="width:${width}px;height:${height}px"><story /></div>` }
}

const meta = {
  title: 'Home Widgets/Weather',
  component: WeatherWidget,
  tags: ['autodocs'],
  decorators: [widgetDecorator],
  argTypes: { size: { control: 'select', options: ['small', 'medium', 'large'] } },
  args: { size: 'medium' },
  beforeEach() {
    localStorage.setItem('weatherDataCache_v3', JSON.stringify({
      timestamp: Date.now(),
      day: new Date().toISOString().slice(0, 10),
      data: {
        current: 72,
        days: [
          { label: 'Today', high: 74, low: 58, rain: 10, cloud: 20 },
          { label: 'Tue', high: 76, low: 60, rain: 20, cloud: 55 },
          { label: 'Wed', high: 69, low: 55, rain: 65, cloud: 80 },
          { label: 'Thu', high: 71, low: 57, rain: 30, cloud: 50 },
          { label: 'Fri', high: 78, low: 62, rain: 5, cloud: 15 },
          { label: 'Sat', high: 80, low: 63, rain: 15, cloud: 35 },
        ],
      },
    }))
  },
} satisfies Meta<typeof WeatherWidget>

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = { args: { size: 'small' } }
export const Medium: Story = { args: { size: 'medium' } }
export const Large: Story = {
  args: { size: 'large' },
  play: async ({ canvasElement }) => {
    await expect(canvasElement).toBeInTheDocument()
  },
}
