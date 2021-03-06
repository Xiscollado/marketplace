import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    marketplace: "Blackwater",
    user: {
      name: "Dakota Jack",
      id: "ABC"
    },
    items: [
      {id: 1, name: "clavos", icon: "nail", owner: "Dakota Jack", price: 3, quantity: 10, ownerId: "ABC" },
      {id: 2, name: "clavos", icon: "nail", owner: "Silvestre Dalton", price: 3, quantity: 10, ownerId: "EFG" },
      {id: 3, name: "Puro", icon: "puro", owner: "Silvestre Dalton", price: 1, quantity: 0.01, ownerId: "EFG" },
    ],
    filters: {
      userOffers: false,
      searchFilter: ""
    },
    sorts: {
      price: "",
      quantity: ""
    },
    notification: {
      type: "ok",
      message: "Esto es un mensaje de ejemplo",
      show: true
    }
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    toggleFilterUserOffers(state) {
      state.filters.userOffers = !state.filters.userOffers;
    },
    disableAllFilters(state) {
      state.filters.userOffers = false;
      state.filters.searchFilter = "";
    },
    setSearchQuery(state, query) {
      state.filters.searchFilter = query;
    },
    setSort(state, sort, sortType) {
      state.sort = sortType;
    }
  },
  actions: {
    SET_ITEMS(context, items) {
      context.commit("setItems", items)
    },
    TOGGLE_FILTER_USER_OFFERS(context) {
      context.commit("toggleFilterUserOffers");
    },
    DISABLE_ALL_FILTERS(context) {
      context.commit("disableAllFilters");
    },
    SET_SEARCH_FILTER(context, query) {
      context.commit("setSearchQuery", query)
    },
    SET_SORT(context, sort, sortType) {
      context.commit("setSort", sort, sortType);
    }
  },
  modules: {
  }
})
