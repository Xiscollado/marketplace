import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    marketplace: "",
    user: {
      name: "Dakota Jack",
      id: "ABC",
      inventory: []
    },
    items: [],
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
      message: ":)",
      show: false
    }
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    setUser(state, user) {
      state.user = user;
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
    setSort(state, sort) {
      state.sorts[sort.name] = sort.type
    },
    setNotification(state, notification) {
      if (notification.type) state.notification.type = notification.type;
      if (notification.message) state.notification.message = notification.message;
      state.notification.show = notification.show;
    },
    setMarketPlace(state, marketPlace) {
      state.marketplace = marketPlace;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    addItem(state, item) {
      state.items.push(item);
    },
    removeItem(state, itemID) {
      let removeIndex = state.items.map(function(item) { return item.id; }).indexOf(itemID);
      state.items.splice(removeIndex, 1);
    }
  },
  actions: {
    SET_ITEMS(context, items) {
      context.commit("setItems", items)
    },
    SET_USER(context, user) {
      context.commit("setUser", user);
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
    SET_SORT(context, sort) {
      context.commit("setSort", sort);
    },
    SET_NOTIFICATION(context, notification) {
      context.commit("setNotification", notification)
      setTimeout(() => {
        context.commit("setNotification", {show: false})
      }, 5000)
    },
    SET_MARKETPLACE_NAME(context, marketplace) {
      context.commit("setMarketPlace", marketplace);
    },
    SET_LOADING(context, loading) {
      context.commit("setLoading", loading);
    },
    ADD_ITEM(context, item) {
      context.commit("addItem", item);
    },
    REMOVE_ITEM(context, id) {
      context.commit("removeItem", id);
    }
  },
  modules: {
  }
})
