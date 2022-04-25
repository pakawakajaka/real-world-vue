<template>
  <p data-testid="event-details-time-place">
    {{ event.time }} on {{ event.date }} @ {{ event.location }}
  </p>
  <p data-testid="event-details-description">{{ event.description }}</p>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
}
</script>
