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

    const eventTitle = wrapper.find('[data-testid="event-details-time-place"]')
    expect(eventTitle.text()).toContain(
      event.time + ' on ' + event.date + ' @ ' + event.location
    )

    const eventText = wrapper.find('[data-testid="event-details-description"]')
    expect(eventText.text()).toContain(event.description)
  })
})
