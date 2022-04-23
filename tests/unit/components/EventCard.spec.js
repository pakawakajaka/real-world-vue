import { mount, RouterLinkStub } from '@vue/test-utils'
import EventCard from '@/components/EventCard.vue'

const event = {
  id: 123,
  category: 'animal welfare',
  title: 'Cat Adoption Day',
  description: 'Find your new feline friend at this event.',
  location: 'Meow Town',
  date: 'January 28, 2022',
  time: '12:00',
  organizer: 'Kat Laydee',
}

const config = {
  global: {
    stubs: {
      RouterLink: RouterLinkStub,
    },
  },
  props: {
    event: event,
  },
}

describe('EventCard', () => {
  test('Event Card is filled with the details of the Event', () => {
    const wrapper = mount(EventCard, config)

    const eventTitle = wrapper.find('[data-testid="event-card-title"]')
    expect(eventTitle.text()).toContain(event.title)

    const eventText = wrapper.find('[data-testid="event-card-text"]')
    expect(eventText.text()).toContain(event.time + ' on ' + event.date)
  })
})
