import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import GStore from '@/gstore'

const config = {
  global: {
    provide: {
      GStore: GStore,
    },
    stubs: ['router-link', 'router-view'],
  },
}

describe('App', () => {
  test('Flash Message exists when there is message text', () => {
    GStore.flashMessage = 'howdy'
    const wrapper = mount(App, config)
    expect(wrapper.find('#flashMessage').exists()).toBe(true)
  })
  test('Flash Message does not exist when there is no message text', () => {
    GStore.flashMessage = ''
    const wrapper = mount(App, config)
    expect(wrapper.find('#flashMessage').exists()).toBe(false)
  })
})
