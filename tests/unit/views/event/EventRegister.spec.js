import { mount, flushPromises } from '@vue/test-utils'
import EventRegister from '@/views/event/EventRegister.vue'
import GStore from '@/gstore'
import { waitForDebugger } from 'inspector'

const event = {
    title: 'Cat Adoption Day'
}

const $route = {
    path: '/path'
}

const $router = {
    push: jest.fn()
}

const config = {
    global: {
        provide: {
            GStore: GStore
        },
        mocks: {
            $router,
            $route
        }
    },
    props: { event: event },
}

describe('EventRegister', () => {
    test('shows user has registered for event flash message and redirects to the page', async () => {
        const wrapper = mount(EventRegister, config)

        EventRegister.methods.register.call(wrapper.vm)
        expect(GStore.flashMessage).toBe('You are successfully registered for ' + event.title)
        expect($router.push).toHaveBeenCalledTimes(1)
    })
})