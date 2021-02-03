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
      class="text-caption font-weight-bold text-md-body-1 rounded-lg"
      to="/"
    >
      <span>ပင်မ</span>
    </v-btn>

    <v-btn
      text
      exact
      class="text-caption font-weight-bold text-md-body-1 rounded-lg"
      :to="{ name: 'News' }"
    >
      <span>သတင်းများ</span>
    </v-btn>

    <v-btn
      text
      exact
      class="text-caption font-weight-bold text-md-body-1 rounded-lg"
      :to="{ name: 'Events' }"
    >
      <span>အစီအစဥ်များ</span>
    </v-btn>
    <v-btn
      text
      exact
      class="text-caption font-weight-bold text-md-body-1 rounded-lg"
      :to="{ name: 'Products', params: { type: 'most-used' } }"
    >
      <span>ထုန်ကုန်များ</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({ value: 1 }),
};
</script>
