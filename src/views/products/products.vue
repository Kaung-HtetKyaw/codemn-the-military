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
      <v-col cols="12" sm="12" md="6" lg="4" v-for="i in 10" :key="i">
        <div
          class="product d-flex flex-row justify-space-between align-center black white--text rounded-lg px-3 py-3"
        >
          <div>Mytel</div>
          <div class="text-caption">telecom</div>
        </div>
      </v-col>
      <v-col cols="12" sm="12" class="d-flex justify-center align-center my-3">
        <v-progress-circular indeterminate color="red"></v-progress-circular>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.product {
  height: 104px;
}
</style>
