<template>
  <v-app>
    <NotificationContainer />
    <transition name="fade" mode="out-in">
      <component :is="this.$route.meta.layout || 'div'"> <slot /> </component
    ></transition>
    <footer>
      <TheFooter />
    </footer>
  </v-app>
</template>

<script>
import TheFooter from "@/components/TheNavBottom";
import NotificationContainer from "@/components/noti/NotificationContainer.vue";
export default {
  name: "AppLayout",
  components: { TheFooter, NotificationContainer },

  data() {
    return {};
  },
};
</script>

<style></style>
