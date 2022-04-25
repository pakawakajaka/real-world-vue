import { mount } from '@vue/test-utils'
import EventEdit from '@/views//event/EventEdit.vue'

const config = {
    props: { event: 'event'},
}

describe('EventEdit', () => {
    test('user does not navigate away when they do not confirm the window prompt', async () => {
        window.confirm = () => {return false}
        const wrapper = mount(EventEdit, config)
        expect(EventEdit.beforeRouteLeave.call(wrapper.vm)).toBe(false)
    })

    test('user is not prevented from navigating away when they confirm the window prompt', async () => {
        window.confirm = () => {return true}
        const wrapper = mount(EventEdit, config)
        expect(EventEdit.beforeRouteLeave.call(wrapper.vm)).not.toBe(false)
    })
})