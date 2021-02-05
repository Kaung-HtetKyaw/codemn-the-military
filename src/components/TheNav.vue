<template>
  <div>
    <v-app-bar app color="white" flat fixed class=" px-0 px-md-16 ">
      <v-btn icon @click="goBack">
        <v-icon class="black--text font-weight-bold">mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn depressed text :ripple="false">
        <span class="black--text text-body-1 font-weight-bold">
          {{ titleMap[`${title}`] ? titleMap[`${title}`] : "" }}</span
        >
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { titleMap } from "@/utils/constants.js";
export default {
  name: "TheNav",
  components: {},

  data: () => ({
    drawer: false,
    group: null,
    titleMap,
  }),
  computed: {
    ...mapState({
      title: (state) => state.ui.title,
    }),
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  box-shadow: 0 0 0 1px rgba(8, 9, 10, 0.2);

  &-item {
    &--text {
      font-size: 17px;
      position: relative;
      padding: 4px 0px;
      transition: all 0.2s ease-in;
      &::before {
        content: "";
        width: 50%;
        height: 3px;
        position: absolute;
        bottom: 0;
        left: 0;
        background: #ff0000;
        transition: all 0.2s ease-in;
      }
      &:hover {
        &::before {
          width: 100%;
        }
      }
    }
  }
  .v-toolbar__content {
    padding: 0;
  }
}
</style>
