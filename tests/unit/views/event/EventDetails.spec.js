import { mount } from '@vue/test-utils'
import EventDetails from '../../../../src/views/event/EventDetails.vue'

const event = {
  description: 'Find your new feline friend at this event.',
  location: 'Meow Town',
  date: 'January 28, 2022',
  time: '12:00',
}

const config = {
  props: {
    event: event,
  },
}

describe('EventDetails', () => {
  test('EventDetails is filled with the details of the Event', () => {
    const wrapper = mount(EventDetails, config)
    const wrapperHtml = wrapper.html()

    expect(wrapperHtml).toContain(event.location)
    expect(wrapperHtml).toContain(event.time)
    expect(wrapperHtml).toContain(event.date)
    expect(wrapperHtml).toContain(event.description)
  })
})
