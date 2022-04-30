import { mount } from '@vue/test-utils'
import EventLayout from '@/views/event/EventLayout.vue'
import { createStore } from 'vuex'

function mountEventLayout(event) {
    const store = createStore({
      state() {
        return { event }
      },
    })
    const config = {
      global: {
        plugins: [store],
        stubs: ['router-link', 'router-view'],
      }
    }
    return mount(EventLayout, config)
  }

describe('EventLayout', () => {
    test('Event is displayed if it exists', () => {
        event = {
            title: 'Cat Adoption Day'
        }

        const wrapper = mountEventLayout(event)
        const eventTitle = wrapper.find('[data-testid="event-layout-title"]')
        expect(eventTitle.text()).toContain(event.title)
    })

    test('Event is not displayed if it does not exist', () => {
        event = null
        
        const wrapper = mountEventLayout(event)
        const eventTitle = wrapper.find('[data-testid="event-layout-title"]')
        expect(eventTitle.exists()).toBe(false)
    })
})