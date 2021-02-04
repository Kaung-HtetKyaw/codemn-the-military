import axios from "@/services/axios.js";
export const namespaced = true;
export const state = {
  products: { items: [] },
  page: 1,
  limit: 10,
  end: false,
};
export const mutations = {
  FETCH_PRODUCTS(state, { items, type }) {
    if (state.products.type !== type) {
      state.products.items = [];
      state.page = 1;
    }
    console.log(type);
    state.products.items = items;
    state.products.type = type;
    if (state.products.items.length > 0 && items.length == 0) state.end = true;
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
        console.log(type);
        commit("FETCH_PRODUCTS", { items: res.data.data, type });
        commit("INCREASE_PAGE");
        return res.data.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
export const getters = {};
