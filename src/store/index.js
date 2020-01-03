import Vue from "vue";
import Vuex from "vuex";
import home from '@/store/modules/home';
import profile from '@/store/modules/profile';
import userFeedback from '@/store/modules/userFeedback';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    home,
    profile,
    userFeedback
  }
});

export default store;