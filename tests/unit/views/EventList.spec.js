import { mount } from '@vue/test-utils'
import EventList from '@/views/EventList.vue'
import { createStore } from 'vuex'

let store
const config = {
  global: {
    stubs: ['router-link'],
  },
  props: {
    page: 1,
  },
}

describe('EventList', () => {
  describe('has next page', () => {
    test('EventList has a next page with 4 events', () => {
      store = createStore({
        state() {
          return { events: [{}, {}, {}, {}] }
        },
      })
      config.global.plugins = [store]

      const wrapper = mount(EventList, config)
      expect(wrapper.find('[data-testid="eventlist-page-next"]').exists()).toBe(
        true
      )
    })

    test('EventList has no next page with 0 events', () => {
      store = createStore({
        state() {
          return { events: [] }
        },
      })
      config.global.plugins = [store]

      const wrapper = mount(EventList, config)
      expect(wrapper.find('[data-testid="eventlist-page-next"]').exists()).toBe(
        false
      )
    })
  })
  describe('has previous page', () => {
    test('EventList has a previous page on page 2', () => {
      config.props = { page: 2 }

      const wrapper = mount(EventList, config)
      expect(wrapper.find('[data-testid="eventlist-page-prev"]').exists()).toBe(
        true
      )
    })

    test('EventList has no previous page on page 1', () => {
      config.props = { page: 1 }

      const wrapper = mount(EventList, config)
      expect(wrapper.find('[data-testid="eventlist-page-prev"]').exists()).toBe(
        false
      )
    })
  })
})
