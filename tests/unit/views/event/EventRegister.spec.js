import { mount } from '@vue/test-utils'
import EventRegister from '@/views/event/EventRegister.vue'
import { createTestingPinia } from '@pinia/testing'
import { useFlashMessageStore } from '@/stores/FlashMessageStore'

const event = {
  title: 'Cat Adoption Day',
}

const $route = {
  path: '/path',
}

const $router = {
  push: jest.fn(),
}

const config = {
  global: {
    plugins: [createTestingPinia()],
    mocks: {
      $router,
      $route,
    },
  },
  props: { event: event },
}

describe('EventRegister', () => {
  test('shows user has registered for event flash message and redirects to the page', async () => {
    const wrapper = mount(EventRegister, config)
    const store = useFlashMessageStore()

    EventRegister.methods.register.call(wrapper.vm)
    expect(store.message).toBe(
      'You are successfully registered for ' + event.title
    )
    expect($router.push).toHaveBeenCalledTimes(1)
  })
})
