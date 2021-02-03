<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        v-for="(event, index) in events"
        :key="event.uniqueId"
      >
        <EventCard
          :event="event"
          v-observe-visibility="index === events.length ? fetchEvents : false"
        />
      </v-col>
      <v-col
        cols="12"
        sm="12"
        class="d-flex justify-center align-center my-3"
        v-if="loading"
      >
        <v-progress-circular indeterminate color="red"></v-progress-circular>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EventCard from "@/components/events/EventCard.vue";
import { mapState } from "vuex";
import store from "@/store/index.js";
export default {
  name: "News",
  components: {
    EventCard,
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapState({
      events: (state) => state.events.events,
    }),
  },
  async created() {
    if (this.events.length === 0) {
      await this.fetchEvents();
    }
  },
  methods: {
    async fetchEvents() {
      const vm = this;
      vm.loading = true;
      await store
        .dispatch("events/fetchEvents")
        .then((res) => {
          console.log(res);
          vm.loading = false;
        })
        .catch((e) => {
          console.log(e);
          vm.loading = false;
        });
    },
  },
};
</script>

<style></style>
