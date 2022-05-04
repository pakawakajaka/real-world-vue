import { defineStore, createPinia, setActivePinia } from 'pinia'
import { useEventStore } from '@/stores/EventStore'
import { createTestingPinia } from '@pinia/testing'
import EventService from '@/services/EventService'

jest.mock('@/services/EventService', () => ({
  getEvents: jest.fn(),
  getEvent: jest.fn((id) => {
    return new Promise((resolve, reject) => {
      if (id == 1) {
        resolve({ data: { id: 1 } })
      } else {
        reject(404)
      }
    })
  }),
  postEvent: jest.fn((event) => {
    return new Promise((resolve, reject) => {
      if (event.id == 1) {
        resolve({ data: event })
      } else {
        reject(500)
      }
    })
  }),
}))

describe('EventStore', () => {
  test('fetchEvents fetches event with proper id', async () => {
    setActivePinia(createPinia())
    const store = useEventStore()
    EventService.getEvents.mockImplementation(() => {
      return new Promise((resolve) => {
        resolve({ data: [{ id: 123 }] })
      })
    })

    await store.fetchEvents()
    expect(store.events[0]).toHaveProperty('id', 123)
  })
  test('fetchEvents throws error properly', async () => {
    setActivePinia(createPinia())
    const store = useEventStore()

    EventService.getEvents.mockImplementation(() => {
      return new Promise((resolve, reject) => {
        reject(500)
      })
    })

    await store.fetchEvents().catch((error) => {
      expect(error).toBe(500)
    })
  })

  test('fetchEvent throws error when id not found', async () => {
    setActivePinia(createPinia())
    const store = useEventStore()

    await store.fetchEvent(0).catch((error) => {
      expect(error).toBe(404)
    })
  })
  test('fetchEvent fetches event', async () => {
    setActivePinia(createPinia())
    const store = useEventStore()

    await store.fetchEvent(1)
    expect(store.event).toHaveProperty('id', 1)
  })

  test('createEvent adds the created event', async () => {
    setActivePinia(createPinia())
    const store = useEventStore()

    await store.createEvent({ id: 1 })
    expect(store.events[0]).toHaveProperty('id', 1)
  })
  test('createEvent throws error properly', async () => {
    setActivePinia(createPinia())
    const store = useEventStore()

    await store.createEvent({ id: 0 }).catch((error) => {
      expect(error).toBe(500)
    })
  })
})
