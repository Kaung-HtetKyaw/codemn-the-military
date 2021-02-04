<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12">
        <h3
          class="text--secondary text-center text-body-2 text-md-subtitle-1 font-weight-bold"
        >
          ဤလုပ်ငန်းများထံမှ ဝယ်ယူသုံးစွဲခြင်းမပြရန်ဖြစ်သည်
        </h3>
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <router-link :to="{ name: 'Products', params: { type: 'most-used' } }"
          ><div
            class="d-flex flex-column flex-md-row justify-center align-center hero--secondary deep-purple darken-2 white--text rounded-lg d-flex justify-center align-center"
          >
            <v-icon color="white" size="50" class="pb-3 mr-md-3"
              >mdi-flag-outline</v-icon
            >
            <h3>လူသုံးများ</h3>
          </div></router-link
        >
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <router-link :to="{ name: 'Products', params: { type: 'most-known' } }">
          <div
            class="d-flex flex-column flex-md-row justify-center align-center hero--secondary teal darken-3 white--text rounded-lg d-flex justify-center align-center"
          >
            <v-icon color="white" size="50" class="pb-3 mr-md-3"
              >mdi-flag-outline</v-icon
            >
            <h3>လူသိများ</h3>
          </div></router-link
        >
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <router-link :to="{ name: 'Products', params: { type: 'less-used' } }">
          <div
            class="d-flex flex-column flex-md-row justify-center align-center hero--secondary brown white--text rounded-lg d-flex justify-center align-center"
          >
            <v-icon color="white" size="50" class="pb-3 mr-md-3"
              >mdi-flag-outline</v-icon
            >
            <h3>တစ်ခါတစ်ရံသုံး</h3>
          </div></router-link
        >
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <router-link :to="{ name: 'Products', params: { type: 'often-used' } }">
          <div
            class="d-flex flex-column flex-md-row justify-center align-center hero--secondary purple darken-3 white--text rounded-lg d-flex justify-center align-center"
          >
            <v-icon color="white" size="50" class="pb-3 mr-md-3"
              >mdi-flag-outline</v-icon
            >
            <h3>အသုံးနည်း</h3>
          </div></router-link
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  height: 30vh;
  &--secondary {
    height: 30vh;
  }
}
</style>
