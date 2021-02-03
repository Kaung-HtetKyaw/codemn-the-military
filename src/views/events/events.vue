<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" v-for="i in 10" :key="i">
        <EventCard />
      </v-col>
      <v-col cols="12" sm="12" class="d-flex justify-center align-center my-3">
        <v-progress-circular indeterminate color="red"></v-progress-circular>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EventCard from "@/components/events/EventCard.vue";
export default {
  name: "News",
  components: {
    EventCard,
  },
};
</script>

<style></style>
