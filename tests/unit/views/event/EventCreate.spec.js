import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import EventCreate from '../../../../src/views/event/EventCreate.vue'

const event = {
  description: 'Find your new feline friend at this event.',
  location: 'Meow Town',
  date: 'January 28, 2022',
  time: '12:00',
}

const config = {
  global: {
    plugins: [createTestingPinia()],
  },
}

describe('EventCreate', () => {
  test('create event', () => {
    const wrapper = mount(EventCreate, config)
    const wrapperHtml = wrapper.html()
  })
})
