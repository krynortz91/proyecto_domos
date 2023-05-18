import { createStore } from 'vuex'
import { Domos } from "@/services/Domos.js";
import { Souvenirs } from "@/services/Souvenirs.js";

export default createStore({
  state: {
  domos: Domos.getAllDomos(),
  souvenirs: Souvenirs.getAllSouvenirs()
  },
  getters: {

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})