<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <div
            class="width-100 red darken-1 rounded-lg hero d-flex justify-center align-center white--text"
          >
            <h1 class="text-h5 font-weight-bold text-md-h4">
              စစ်အစိုးရစနစ် ကျရှုံးပါစေ
            </h1>
          </div>
        </v-col>
        <v-col cols="12" sm="12" class="my-4">
          <h2 class="text-center font-weight-bold text-subtitle-1 text-md-h5">
            စစ်တပ် အသိုင်းအဝိုင်းမှ လုပ်ငန်းများ
          </h2>
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
          <router-link
            :to="{ name: 'Products', params: { type: 'most-known' } }"
          >
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
          <router-link
            :to="{ name: 'Products', params: { type: 'less-used' } }"
          >
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
          <router-link
            :to="{ name: 'Products', params: { type: 'often-used' } }"
          >
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
        <v-col cols="12" sm="12" md="12">
          <router-link :to="{ name: 'News' }">
            <div
              class="d-flex flex-column flex-md-row justify-center align-center hero--secondary black white--text rounded-lg d-flex justify-center align-center"
            >
              <v-icon
                color="black"
                class="white rounded-xl px-1 py-1 mb-3 mr-md-3"
                >mdi-exclamation-thick</v-icon
              >
              <h3>နောက်ဆုံးရ သတင်းများ</h3>
            </div></router-link
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
<style lang="scss" scoped>
.hero {
  height: 30vh;
  &--secondary {
    height: 30vh;
  }
}
</style>
