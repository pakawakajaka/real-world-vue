import { setActivePinia, createPinia } from 'pinia'
import { useFlashMessageStore } from '@/stores/FlashMessageStore'

describe('FlashMessageStore', () => {
  test('FlashMessageStore sets message properly', () => {
    setActivePinia(createPinia())
    const store = useFlashMessageStore()
    store.setMessage('howdy')

    expect(store.message).toBe('howdy')
  })
})
