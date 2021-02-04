<template>
  <v-container>
    <v-row class="loading" v-if="loading" justify="center" align="center">
      <v-progress-circular indeterminate color="red"></v-progress-circular>
    </v-row>
    <v-row v-else>
      <v-col cols="12" sm="12">
        <h1 class="text-h5 font-weight-bold text-center myanmar-sans-pro">
          {{ singleNews.title }}
        </h1>
      </v-col>
      <v-col cols="12" sm="12" class="px-8 py-0">
        <div class="my-2">
          <v-icon size="15" class="mr-2">mdi-clock-outline</v-icon>
          <span class="text-caption black--text">{{ timeAgo }}</span>
        </div>
      </v-col>
      <v-col cols="12" sm="12">
        <div class="news__content px-3 font-weight-bold">
          {{ singleNews.content }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import store from "@/store/index.js";
import { timeAgo } from "@/utils/time.js";
export default {
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapState({
      singleNews: (state) => state.news.singleNews,
    }),
    timeAgo() {
      return timeAgo(new Date(this.singleNews.createdAt).getTime());
    },
  },
  async created() {
    if (!this.singleNews) {
      await this.fetchSingleNews();
    }
  },
  methods: {
    async fetchSingleNews() {
      const vm = this;
      vm.loading = true;
      await store
        .dispatch("news/fetchSingleNews", this.$route.params.id)
        .then((res) => {
          vm.loading = false;
          console.log(res);
        })
        .catch((e) => {
          vm.loading = false;
          console.log(e);
        });
    },
  },
};
</script>

<style lang="css" scoped>
@font-face {
  font-family: myanmar-sans-pro;
  src: url("/assets/fonts/MyanmarSansPro-Regular.ttf");
}
.news__content {
  font-family: "myanmar-sans-pro";
  line-height: 2.5;
}
.myanmar-sans-pro {
  font-family: "myanmar-sans-pro" !important;
}
.loading {
  width: 100%;
  height: 80vh;
}
</style>
