<template>
  <div class="news-card px-5 py-5 rounded-lg font-weight-bold">
    <div>
      <h5 class="text-body-1 font-weight-bold ">သံပုံးတီးရန်</h5>
    </div>
    <div class="my-2">
      <v-icon size="15" class="mr-2">mdi-clock-outline</v-icon>
      <span class="text-caption">3 hrs ago</span>
    </div>
    <div>
      <p class="text-body-2  font-weight-bold text--secondary">
        Plan B ကဘာလဲ ဘာညာနဲ့ ၇၂ နာရီနေလို့မှမထူးရင် Strike မယ်ဘာညာနဲ့ သွေးဆူမယ့်
        လူတွေကိုပြောချင်တာက
      </p>
    </div>
    <div class="my-2 d-flex justify-space-between">
      <div>
        <v-icon size="15" class="mr-2">mdi-pin-outline</v-icon>
        <span class="text-caption">နေအိမ်</span>
      </div>
      <div>
        <v-icon size="15" class="mr-2">mdi-clock-outline</v-icon>
        <span class="text-caption">3 hrs ago</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style style="scss" scoped>
.news-card {
  background: rgba(5, 255, 0, 0.21);
}
</style>
