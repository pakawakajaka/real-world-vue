import { mount, RouterLinkStub } from '@vue/test-utils'
import EventCard from '@/components/EventCard.vue'

const event = {
  title: 'Cat Adoption Day',
  date: 'January 28, 2022',
  time: '12:00',
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
    const wrapperHtml = wrapper.html()

    expect(wrapperHtml).toContain(event.title)
    expect(wrapperHtml).toContain(event.time)
    expect(wrapperHtml).toContain(event.date)
  })
})
