import axios from "@/services/axios.js";
export const namespaced = true;
export const state = {
  products: { items: [] },
  page: 1,
  limit: 10,
  end: false,
};
export const mutations = {
  FETCH_PRODUCTS(state, products, type) {
    if (state.products.type !== type) {
      state.products.items = [];
      state.page = 1;
    }
    state.products.items = products;
    state.products.type = type;
    if (state.products.items.length > 0 && products.length == 0)
      state.end = true;
  },
  INCREASE_PAGE(state) {
    state.page++;
  },
};

export const actions = {
  async fetchProducts({ commit, state }, type, query = "") {
    return await axios()
      .get(
        `/products/${type}/?page=${state.page}&limit=${state.limit}&${query}`
      )
      .then((res) => {
        commit("FETCH_PRODUCTS", res.data.data, type);
        commit("INCREASE_PAGE");
        return res.data.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
export const getters = {};
