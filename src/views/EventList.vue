<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard
      v-for="event in this.events.slice(firstIndex, lastIndex)"
      :key="event.id"
      :event="event"
    />

    <div class="pagination">
      <router-link
        id="page-prev"
        data-testid="event-list-page-prev"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page > 1"
        >&#60; Previous</router-link
      >
      <router-link
        id="page-next"
        data-testid="event-list-page-next"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        >Next &#62;</router-link
      >
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'

const eventsPerPage = 3

export default {
  name: 'EventList',
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  components: {
    EventCard,
  },
  computed: {
    events() {
      return this.$store.state.events
    },
    hasNextPage() {
      var totalPages = Math.ceil(this.events.length / eventsPerPage)
      return this.page < totalPages
    },
    firstIndex() {
      return (this.page - 1) * eventsPerPage
    },
    lastIndex() {
      return this.page * eventsPerPage
    },
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>
