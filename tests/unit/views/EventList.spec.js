import { mount } from '@vue/test-utils'
import EventList from '@/views/EventList.vue'
import { createTestingPinia } from '@pinia/testing'
import { useEventStore } from '@/stores/EventStore'

function mountEventList(page = 1) {
  const config = {
    global: {
      stubs: ['router-link'],
      plugins: [createTestingPinia()],
    },
    props: {
      page,
    },
  }
  const wrapper = mount(EventList, config)
  const store = useEventStore()
  return { wrapper, store }
}

describe('EventList', () => {
  describe('has next page', () => {
    test('EventList has a next page with 4 events', async () => {
      const { wrapper, store } = mountEventList()
      store.events = [{}, {}, {}, {}]
      await store.fetchEvents()

      expect(store.fetchEvents).toHaveBeenCalledTimes(1)
      expect(
        wrapper.find('[data-testid="event-list-page-next"]').exists()
      ).toBe(true)
    })

    test('EventList has no next page with 0 events', async () => {
      const { wrapper, store } = mountEventList()
      store.events = []
      await store.fetchEvents()

      expect(store.fetchEvents).toHaveBeenCalledTimes(1)
      expect(
        wrapper.find('[data-testid="event-list-page-next"]').exists()
      ).toBe(false)
    })
  })

  describe('has previous page', () => {
    test('EventList has a previous page on page 2', () => {
      const page = 2
      const { wrapper } = mountEventList(page)
      expect(
        wrapper.find('[data-testid="event-list-page-prev"]').exists()
      ).toBe(true)
    })

    test('EventList has no previous page on page 1', () => {
      const page = 1
      const { wrapper } = mountEventList(page)
      expect(
        wrapper.find('[data-testid="event-list-page-prev"]').exists()
      ).toBe(false)
    })
  })
})
