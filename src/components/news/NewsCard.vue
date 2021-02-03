<template>
  <div class="news-card px-5 py-5 rounded-lg font-weight-bold">
    <div>
      <h5
        class="text-body-1 text-md-h5 font-weight-bold black--text maynmar-sans-pro"
      >
        {{ news.title }}
      </h5>
    </div>
    <div class="my-2">
      <v-icon size="15" class="mr-2">mdi-clock-outline</v-icon>
      <span
        class="text-caption black--text text--secondary font-weight-medium"
        >{{ timeAgo }}</span
      >
    </div>
    <div>
      <p class="text-body-2 black--text  font-weight-bold text--secondary">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
import { timeAgo } from "@/utils/time.js";
export default {
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
  computed: {
    description() {
      return this.news.content
        .split(" ")
        .slice(0, 20)
        .join(" ");
    },
    timeAgo() {
      return timeAgo(new Date(this.news.createdAt).getTime());
    },
  },
};
</script>

<style style="scss" scoped>
.news-card {
  background: rgba(199, 199, 199, 0.25);
}
</style>
