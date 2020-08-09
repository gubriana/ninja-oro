import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    puntajeOro: 0,
    actividades: []
  },
  mutations: {
    guardarOro(state, nuevoPuntaje) {
      state.puntajeOro = state.puntajeOro + nuevoPuntaje;
    },
    agregarActividad(state, nuevaActividad) {
      state.actividades = [...state.actividades, nuevaActividad];
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
