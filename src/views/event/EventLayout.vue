<template>
  <div v-if="this.event">
    <h1 data-testid="event-layout-title">{{ this.event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'EventDetails' }">Details</router-link>
      |
      <router-link :to="{ name: 'EventRegister' }">Register</router-link>
      |
      <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
    </div>
    <router-view :event="this.event" />
  </div>
</template>

<script>
import { useEventStore } from '@/stores/EventStore'

export default {
  setup() {
    const eventStore = useEventStore()
    return { eventStore }
  },
  computed: {
    event() {
      return this.eventStore.event
    },
  },
}
</script>
