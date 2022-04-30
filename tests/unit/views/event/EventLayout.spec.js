import { mount } from '@vue/test-utils'
import EventLayout from '@/views/event/EventLayout.vue'
import { createStore } from 'vuex'

let store
let event
const config = {
    global: {
        stubs: ['router-link', 'router-view'],
    },        
}

describe('EventLayout', () => {
    test('Event is displayed if it exists', () => {
        event = {
            title: 'Cat Adoption Day'
        }
        store = createStore({
            state() {
                return { event: event }
            }
        })
        config.global.plugins = [store]

        const wrapper = mount(EventLayout, config)
        const eventTitle = wrapper.find('[data-testid="event-layout-title"]')
        expect(eventTitle.text()).toContain(event.title)
    })

    test('Event is not displayed if it does not exist', () => {
        event = null
        store = createStore({
            state() {
                return { event: event }
            }
        })
        config.global.plugins = [store]

        const wrapper = mount(EventLayout, config)
        const eventTitle = wrapper.find('[data-testid="event-layout-title"]')
        expect(eventTitle.exists()).toBe(false)
    })
})