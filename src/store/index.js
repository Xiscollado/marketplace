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
    ]
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    }
  },
  actions: {
    SET_ITEMS(context, items) {
      context.commit("setItems", items)
    }
  },
  modules: {
  }
})
