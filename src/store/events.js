import axios from "@/services/axios.js";
export const namespaced = true;
export const state = {
  events: [],
  page: 1,
  limit: 10,
  end: false,
};
export const mutations = {
  FETCH_EVENTS(state, events) {
    state.events = state.events.concat(events);
    if (state.events.length > 0 && events.length == 0) state.end = true;
  },
  INCREASE_PAGE(state) {
    state.page++;
  },
};

export const actions = {
  async fetchEvents({ commit, state }, query = "") {
    return await axios()
      .get(`/events?page=${state.page}&limit=${state.limit}&${query}`)
      .then((res) => {
        commit("FETCH_EVENTS", res.data.data);
        commit("INCREASE_PAGE");
        return res.data.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
export const getters = {};
