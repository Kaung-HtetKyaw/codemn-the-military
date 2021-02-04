<template>
  <v-bottom-navigation
    app
    fixed
    horizontal
    :value="value"
    color="red darken-1"
    class="pt-3 px-2"
    grow
  >
    <v-btn
      text
      exact
      class="text-caption font-weight-bold text-md-body-1 rounded-lg "
      to="/"
    >
      <div class="d-flex justify-center">
        <v-icon>mdi-home-outline</v-icon>
        <span class="px-2 d-none d-md-flex">ပင်မ</span>
      </div>
    </v-btn>

    <v-btn
      text
      exact
      class="text-caption font-weight-bold text-md-body-1 rounded-lg px-2"
      :to="{ name: 'News' }"
    >
      <div class="d-flex justify-center">
        <v-icon>mdi-exclamation-thick</v-icon>
        <span class="px-2 d-none d-md-flex">သတင်းများ</span>
      </div>
    </v-btn>

    <v-btn
      text
      exact
      class="text-caption font-weight-bold text-md-body-1 rounded-lg px-2"
      :to="{ name: 'Events' }"
    >
      <div class="d-flex justify-center">
        <v-icon>mdi-calendar-check-outline</v-icon>
        <span class="px-2 d-none d-md-flex">အစီအစဥ်များ</span>
      </div>
    </v-btn>
    <v-btn
      text
      exact
      class="text-caption font-weight-bold text-md-body-1 rounded-lg px-2"
      :to="{ name: 'Products-Type' }"
    >
      <div class="d-flex justify-center">
        <v-icon>mdi-skull-crossbones-outline</v-icon>
        <span class="px-2 d-none d-md-flex">လုပ်ငန်းများ</span>
      </div>
    </v-btn>
    <v-btn
      text
      exact
      class="text-caption font-weight-bold text-md-body-1 rounded-lg px-2"
      :to="{ name: 'About' }"
    >
      <div class="d-flex justify-center">
        <v-icon>mdi-progress-question</v-icon>
        <span class="px-2 d-none d-md-flex">သံစဥ်များ</span>
      </div>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({ value: 1 }),
};
</script>
