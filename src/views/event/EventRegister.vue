<template>
  <p>Register for Event here.</p>
  <button @click="register">Register Me</button>
</template>

<script>
import { useFlashMessageStore } from '@/stores/FlashMessageStore'

export default {
  props: ['event'],
  setup() {
    const flashMessageStore = useFlashMessageStore()
    return { flashMessageStore }
  },
  methods: {
    register() {
      // Call to API
      // If registered the nredirect to event details
      this.flashMessageStore.message =
        'You are successfully registered for ' + this.event.title

      setTimeout(() => {
        this.flashMessageStore.message = ''
      }, 3000)
      this.$router.push({
        name: 'EventDetails',
      })
    },
  },
}
</script>
