<template>
  <div
    class="news-card px-5 py-5 rounded-lg font-weight-bold"
    :class="{ active: !isOver, inactive: isOver }"
  >
    <div>
      <h5 class="text-body-1 font-weight-bold ">{{ event.title }}</h5>
    </div>
    <div class="my-2">
      <v-icon size="15" class="mr-2">mdi-clock-outline</v-icon>
      <span class="text-caption">{{ timeAgo(event.startTime) }}</span>
    </div>
    <div>
      <p class="text-body-2  font-weight-bold text--secondary">
        {{ event.description }}
      </p>
    </div>
    <div class="my-2 d-flex justify-space-between">
      <div>
        <v-icon size="15" class="mr-2">mdi-pin-outline</v-icon>
        <span class="text-caption">{{
          event.location ? event.location : "နေရာမသတ်မှတ်ထား"
        }}</span>
      </div>
      <div>
        <v-icon size="15" class="mr-2">mdi-clock-outline</v-icon>
        <span class="text-caption">{{ timeAgo(event.startTime) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { timeAgo } from "@/utils/time.js";
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isOver() {
      return new Date(this.event.startTime) > Date.now();
    },
  },
  methods: {
    timeAgo(time) {
      return timeAgo(new Date(time).getTime());
    },
  },
};
</script>

<style style="scss" scoped>
.active {
  background: rgba(5, 255, 0, 0.21);
}
.inactive {
  background: rgba(255, 0, 0, 0.38);
}
</style>
