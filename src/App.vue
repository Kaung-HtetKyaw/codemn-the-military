<template>
  <div>
    <Layout class="main__wrapper">
      <transition name="fade" tag="div"
        ><router-view :key="$route.fullPath"></router-view
      ></transition>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/layouts/AppLayout.vue";

export default {
  name: "App",
  components: {
    Layout,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="sass">
@import "@/assets/styles/index.sass"
</style>
