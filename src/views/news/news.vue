<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        v-for="(singleNews, index) in news"
        :key="singleNews.uniqueId"
        v-observe-visibility="index === news.length ? fetchNews : false"
      >
        <router-link
          :to="{ name: 'News-Single', params: { id: singleNews.uniqueId } }"
        >
          <NewsCard :news="singleNews"
        /></router-link>
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
import NewsCard from "@/components/news/NewsCard.vue";
import store from "@/store/index.js";
import { mapState } from "vuex";
export default {
  name: "News",
  components: {
    NewsCard,
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapState({
      news: (state) => state.news.news,
      end: (state) => state.news.end,
    }),
  },
  async created() {
    if (this.news.length === 0) {
      await this.fetchNews();
    }
  },
  methods: {
    async fetchNews() {
      if (!this.end) {
        const vm = this;
        vm.loading = true;

        await store
          .dispatch("news/fetchNews")
          .then(() => {
            vm.loading = false;
          })
          .catch(() => {
            vm.loading = false;
          });
      }
    },
  },
};
</script>

<style></style>
