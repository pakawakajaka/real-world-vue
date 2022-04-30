import { mount, RouterLinkStub } from '@vue/test-utils'
import NotFound from '@/views/NotFound.vue'

const config = {
  global: {
    stubs: {
      RouterLink: RouterLinkStub,
    },
  },
}

beforeEach(() => {
  config.props = null
})

describe('NotFound', () => {
  test('NotFound displays default text when no prop is given', () => {
    const wrapper = mount(NotFound, config)
    expect(wrapper.html()).toContain("The page you're looking for is not here")
  })

  test('NotFound displays prop text when a prop is given', () => {
    config.props = { resource: 'event' }
    const wrapper = mount(NotFound, config)
    expect(wrapper.html()).toContain("The event you're looking for is not here")
  })
})
