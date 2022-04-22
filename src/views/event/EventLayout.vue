<template>
  <div v-if="this.event">
    <h1>{{ this.event.title }}</h1>
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
export default {
  computed: {
    event() {
      return this.$store.state.event
    },
  },
}
</script>
