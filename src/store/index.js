import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    opinionGames: JSON.parse(localStorage.getItem('opinionGames')) || []
  },
  getters: {
  },
  mutations: {
    ADD_OPINION_GAMES:(state, data)=>{ 
      state.opinionGames.push(data)
      localStorage.setItem('opinionGames', JSON.stringify(state.opinionGames));
    },
    REMOVE_OPINION_GAMES:(state, id)=>{
      state.opinionGames.splice(id, 1)
      localStorage.setItem('opinionGames', JSON.stringify(state.opinionGames));
    },
    EDIT_OPINION_GAMES:(state, data)=>{
      state.opinionGames[data.id].nombre = data.nombre;
      state.opinionGames[data.id].opinion = data.opinion;
      localStorage.setItem('opinionGames', JSON.stringify(state.opinionGames));
    }
  },
  actions: {
    addOpinionGames:({commit}, data)=>{
      commit('ADD_OPINION_GAMES', data)
    },
    removeOpinionGames:({commit}, id)=>{
      commit('REMOVE_OPINION_GAMES', id)
    },
    editOpinionGames:({commit}, data)=>{
      commit('EDIT_OPINION_GAMES', data)
    }
  },
  modules: {
  } 
})
