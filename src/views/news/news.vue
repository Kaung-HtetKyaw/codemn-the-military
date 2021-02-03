<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" v-for="i in 10" :key="i">
        <router-link :to="{ name: 'News-Single', params: { id: 'alo' } }">
          <NewsCard
        /></router-link>
      </v-col>
      <v-col cols="12" sm="12" class="d-flex justify-center align-center my-3">
        <v-progress-circular indeterminate color="red"></v-progress-circular>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewsCard from "@/components/news/NewsCard.vue";
export default {
  name: "News",
  components: {
    NewsCard,
  },
};
</script>

<style></style>
