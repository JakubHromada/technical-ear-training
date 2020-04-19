import Vue from 'vue'
import Vuex from 'vuex'
import filterCutOffTraining from './modules/filterCutOffTraining'
import eEqMatchingTraining from './modules/eqMatchingTraining'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
      cutOff: filterCutOffTraining,
      eqMatching: eEqMatchingTraining
    },
    state: {
      audioCtx: new (window.AudioContext || window.webkitAudioContext)(),
      audioBuffer: []
    },
    getters: {
      
    },
    mutations: {
      // mutation used to modify the state property
      loadBuffer(state, audioBuffer) {
        state.audioBuffer = audioBuffer;
      }
    },
    actions: {
      setAudioBuffer(context, audioBuffer) {
        context.commit('loadBuffer', audioBuffer);
      },
    },
    strict: debug,
  });

