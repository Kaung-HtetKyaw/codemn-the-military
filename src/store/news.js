import axios from "@/services/axios.js";
export const namespaced = true;
export const state = {
  news: [],
  singleNews: null,
  page: 1,
  limit: 10,
  end: false,
};
export const mutations = {
  FETCH_NEWS(state, news) {
    state.news = state.news.concat(news);
    if (state.news.length > 0 && news.length == 0) state.end = true;
  },
  FETCH_SINGLE_NEWS(state, news) {
    state.singleNews = news;
  },
  INCREASE_PAGE(state) {
    state.page++;
  },
};

export const actions = {
  async fetchNews({ commit, state }, query = "") {
    return await axios()
      .get(`/news?page=${state.page}&limit=${state.limit}&${query}`)
      .then((res) => {
        commit("FETCH_NEWS", res.data.data);
        commit("INCREASE_PAGE");
        return res.data.data;
      })
      .catch((e) => {
        console.log(e.response);
      });
  },
  async fetchSingleNews({ commit }, id) {
    return await axios()
      .get(`/new/${id}`)
      .then((res) => {
        commit("FETCH_SINGLE_NEWS", res.data.data);
        return res.data.data;
      })
      .catch((e) => {
        console.log(e.response);
      });
  },
};
export const getters = {};
