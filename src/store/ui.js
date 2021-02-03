export const namespaced = true;
export const state = {
  title: "",
};
export const mutations = {
  SET_TITLE(state, title) {
    state.title = title;
  },
};

export const actions = {
  setPageTitle({ commit }, title) {
    commit("SET_TITLE", title);
  },
};
export const getters = {};
