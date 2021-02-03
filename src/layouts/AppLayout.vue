<template>
  <v-app>
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
export default {
  name: "AppLayout",
  components: { TheFooter },

  data() {
    return {};
  },
};
</script>

<style></style>
