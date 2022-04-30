import { mount } from '@vue/test-utils'
import EventList from '@/views/EventList.vue'
import { createStore } from 'vuex'

function mountEventList(events = [], page = 1) {
  const store = createStore({
    state() {
      return { events }
    },
  })
  const config = {
    global: {
      stubs: ['router-link'],
      plugins: [store]
    },
    props: {
      page,
    },
  }
  return mount(EventList, config)
}

describe('EventList', () => {
  describe('has next page', () => {
    test('EventList has a next page with 4 events', () => {
      const events = [{}, {}, {}, {}]
      const wrapper = mountEventList(events)

      expect(wrapper.find('[data-testid="event-list-page-next"]').exists()).toBe(
        true
      )
    })

    test('EventList has no next page with 0 events', () => {
      const events = []
      const wrapper = mountEventList(events)

      expect(wrapper.find('[data-testid="event-list-page-next"]').exists()).toBe(
        false
      )
    })
  })

  describe('has previous page', () => {
    test('EventList has a previous page on page 2', () => {
      const page = 2

      const wrapper = mountEventList(undefined, page)
      expect(wrapper.find('[data-testid="event-list-page-prev"]').exists()).toBe(
        true
      )
    })

    test('EventList has no previous page on page 1', () => {
      const page = 1

      const wrapper = mountEventList(undefined, page)
      expect(wrapper.find('[data-testid="event-list-page-prev"]').exists()).toBe(
        false
      )
    })
  })
})
