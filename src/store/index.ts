import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

// interface RootState {
// }

const debug = process.env.NODE_ENV !== 'production';
// const setState = <T extends object, U extends keyof T>(key: U) => (state: T, payload: T[U]) => {
//   state[key] = payload;
// };

const store = new Vuex.Store({
  strict: debug,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins: debug ? [Vuex.createLogger()] : [],
});

export default store;
