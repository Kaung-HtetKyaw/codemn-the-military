<template>
  <div>
    <NotiBar v-for="noti in notifications" :key="noti.id" :noti="noti" />
  </div>
</template>

<script>
import NotiBar from "@/components/noti/NotificationBar.vue";
import { mapState } from "vuex";
export default {
  components: {
    NotiBar,
  },
  computed: {
    ...mapState({
      notifications: (state) => state.notifications.notifications,
    }),
  },
};
</script>

<style></style>
