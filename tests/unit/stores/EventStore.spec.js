import { createPinia, setActivePinia } from 'pinia'
import { useEventStore } from '@/stores/EventStore'

describe('EventStore', () => {
  test('EventStore fetches event with proper id', async () => {
    setActivePinia(createPinia())
    const store = useEventStore()
    const id = 123

    await store.fetchEvent(id)
    expect(store.event.id).toBe(id)
  })
  test('EventStore throws error when id not found', async () => {
    setActivePinia(createPinia())
    const store = useEventStore()
    const id = 0

    await store.fetchEvent(id).catch((error) => {
        expect(error.response.status).toBe(404)
    })
  })
})
