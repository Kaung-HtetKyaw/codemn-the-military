<template>
  <v-container>
    <v-row>
      <v-col cols="=12" sm="12" class="d-flex justify-center align-center">
        <div><v-img width="100" src="/logo.PNG"></v-img></div>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        class="d-flex flex-column justify-center align-center"
      >
        <h3 class="my-0">RESISTANCE</h3>
        <span class="text-caption text--secondary">v0.0.1</span>
        <p class="text-body-2 font-weight-bold">Latest Release</p>
      </v-col>
      <v-col cols="12" sm="12">
        <v-divider></v-divider>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        class="d-flex flex-column justify-center align-center"
      >
        <h2 class="mb-4 underline text-h5 font-weight-bold py-2">
          App အကြောင်း
        </h2>
        <p class="font-weight-bold px-2 about ">
          RESISTANCE ကို ကျွန်တော်တို့မြန်မာလူငယ် Developer တွေစုရေးခဲ့ပါသည်။
          ရေးသားရတဲ့ ရည်ရွယ်ချက်ကစစ်အာဏာရှင်ကို
          ဖြုတ်ချဖို့အတွက်နဲ့အာဏာရှင်ရဲ့လော်ဘီတွေဘက်ကနေဖန်တီးသော
          သတင်းအတုများနှင့် ပြည်သူတွေရဲ့ ယုံကြည်မှု ပျက်ပြားစေနိုင်သည့်
          သတင်းအမှားများကိုကာကွယ်ရန်ဖြစ်ပါတယ်။ဒါ့အပြင် ပြည်သူများအနေနဲ့ Civil
          Disobedience ကို ပါ၀င်ဆင်နွှဲ‌နေစဉ်စစ်အာ‌ဏာရှင်ပိုင် ကုမ္ပဏီများကို
          ရှောင်ရှား ပစ်ပယ်နိုင်ရန်အတွက်လည်း ကုမ္ပဏီများရဲ့စာရင်းကို
          တစ်စုတစ်စည်းထဲ ကြည့်ရှုနိုင်အောင်
          စီစဉ်ပေးထားပါသည်။ထို့ကြောင့်ကျနော်တို့ Appကိုသုံးခြင်းဖြင့်
          စစ်အာဏာရှင်တွေဘက်က လော်ဘီရဲ့သတင်းအမှားတွေကိုရှောင်ရှားရင်း
          အာဏာရှင်ပိုင်ကုမ္ပဏီများရဲ့ ကုန်ပစ္စည်းများကို
          မသုံးကြဖို့တိုက်တွန်းလိုက်ပါသည်
        </p>
      </v-col>
      <v-col cols="12" sm="12">
        <v-divider></v-divider>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        class="d-flex flex-column justify-center align-center"
      >
        <h2 class="mb-4 underline font-weight-bold">Terms and Policy</h2>
        <p class="font-weight-bold px-2 about ">
          RESISTANCE
          သည်မည်သည့်အစိုးရအဖွဲ့အစည်းများနှင့်မျှဆက်နွယ်ခြင်းမရှိဘဲစစ်အစိုးရစနစ်ကိုဆန့်ကျင်သူများစုစည်း‌ရေးသားထားသောမိုဘိုင်းအပလီကေးရှင်းတစ်ခုဖြစ်သည်။
          ကျွန်ုပ်တို့ကဲ့သို့စစ်အစိုးရကိုဆန့်ကျင်၍စစ်တပ်အသိုင်းအဝိုင်းမှလုပ်ငန်းများကိုအသုံးမပြုလိုသူများအတွက်စစ်တပ်အသိုင်းအဝိုင်းမှလုပ်ငန်းများကိုစုစည်းပေးထားခြင်းဖြစ်သည်။ထို့ပြင်နိုင်ငံရေးနှင့်ပတ်သက်သောသတင်းများကိုပါသိရှိစေနိုင်ရန်အမြန်ဆုံးတင်ပေးသွားမည်ဖြစ်သည်။
          မှန်ကန်သောသတင်းအချက်အလက်များကိုသာအစွမ်းကုန်ရှာဖွေတင်ပြသွားမည်ဖြစ်ကြောင်းအာမခံပါသည်။မှားယွင်းသောသတင်းအချက်အလက်များရှိပါကချက်ချင်းသုံးစွဲသူများအားအသိပေးကာအပလီကေးရှင်းပေါ်မှဖြုတ်ချသွား
          မည်ဖြစ်သည်။
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  line-height: 2.25;
}
.underline {
  position: relative;
  display: inline-block;
  padding-bottom: 5px;
  &::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 4px;
    background-color: #c5372c;

    left: 0;
    bottom: 0;
  }
}
</style>
