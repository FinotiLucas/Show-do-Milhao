import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chartData: [
      ["Alternativas", "Porcentagem de votos da platéia"],
      ["A", 0],
      ["B", 0],
      ["C", 0],
      ["D", 0],
    ],
    callHelp: "",
  },
  mutations: {
    updateChartData: (state, data) => (state.chartData = data),
    updateCallHelp: (state, data) => (state.callHelp = data),
  },
  actions: {},
  modules: {},
});
