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
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="4"
        v-for="product in products"
        :key="product.uniqueId"
      >
        <div
          class="product d-flex flex-row justify-space-between align-center black white--text rounded-lg px-3 py-3"
        >
          <div class="text-capitalize">{{ product.productName }}</div>
          <div class="text-caption">
            {{ product._industry ? product._industry.name : "" }}
          </div>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        class="d-flex justify-center align-center my-3"
        v-if="loading"
      >
        <v-progress-circular indeterminate color="red"></v-progress-circular>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import store from "@/store/index.js";
export default {
  data() {
    return {
      loading: false,
      products: [],
    };
  },
  computed: {
    ...mapState({
      products_detail: (state) => state.products.products,
    }),
  },
  async created() {
    if (
      this.products_detail.type !== this.$route.params.type ||
      this.products_detail.items.length === 0
    ) {
      await this.loadProducts();
      return;
    }
    this.products = [...this.products_detail.items];
  },
  methods: {
    async loadProducts() {
      const vm = this;
      vm.loading = true;
      await store
        .dispatch("products/fetchProducts", vm.$route.params.type)
        .then(() => {
          vm.products = [...vm.products_detail.items];
          console.log(vm.products_detail.items);
          console.log(vm.products);
          vm.loading = false;
        })
        .catch((e) => {
          console.log(e);
          vm.loading = false;
        });
    },
  },
  watch: {
    $route: async function() {
      this.products = [];
      await this.loadProducts();
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  height: 104px;
}
</style>
