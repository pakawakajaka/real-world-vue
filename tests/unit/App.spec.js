import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import App from '@/App.vue'
import { useFlashMessageStore } from '@/stores/FlashMessageStore'

describe('App', () => {
  let wrapper
  let store
  beforeEach(() => {
    const config = {
      global: {
        plugins: [createTestingPinia()],
        stubs: ['router-link', 'router-view'],
      },
    }
    wrapper = mount(App, config)
    store = useFlashMessageStore()
  })
  test('Flash Message exists when there is message text', async () => {
    store.message = 'howdy'
    await store.setMessage()

    expect(store.setMessage).toHaveBeenCalledTimes(1)
    expect(wrapper.find('[data-testid="flashMessage"]').exists()).toBe(true)
  })
  test('Flash Message does not exist when there is no message text', async () => {
    store.message = ''
    await store.setMessage()

    expect(store.setMessage).toHaveBeenCalledTimes(1)
    expect(wrapper.find('[data-testid="flashMessage"]').exists()).toBe(false)
  })
})
