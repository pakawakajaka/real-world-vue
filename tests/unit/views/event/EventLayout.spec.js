import { mount } from '@vue/test-utils'
import EventLayout from '@/views/event/EventLayout.vue'
import { createTestingPinia } from '@pinia/testing'
import { useEventStore } from '@/stores/EventStore'

function mountEventLayout(event) {
  const config = {
    global: {
      plugins: [createTestingPinia()],
      stubs: ['router-link', 'router-view'],
    },
  }
  const wrapper = mount(EventLayout, config)
  const store = useEventStore()
  store.event = event
  return { wrapper, store }
}

describe('EventLayout', () => {
  test('Event is displayed if it has an id', async () => {
    const event = {
      id: 1,
      title: 'Cat Adoption Day',
    }
    const { wrapper, store } = mountEventLayout(event)
    await store.fetchEvent(event.id)
    const eventTitle = wrapper.find('[data-testid="event-layout-title"]')

    expect(store.fetchEvent).toHaveBeenCalledTimes(1)
    expect(eventTitle.text()).toContain(event.title)
  })

  test('Event is not displayed if it does not have an id', async () => {
    const event = {}
    const { wrapper, store } = mountEventLayout(event)
    await store.fetchEvent(event.id)
    const eventTitle = wrapper.find('[data-testid="event-layout-title"]')

    expect(store.fetchEvent).toHaveBeenCalledTimes(1)
    expect(eventTitle.exists()).toBe(false)
  })
})
