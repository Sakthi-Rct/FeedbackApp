import { LOGIN, CURRENT_USER } from '@/store/actions.type';
import { UPDATE_USERS_LIST, UPDATE_CURRENT_USER } from '@/store/mutations.type';

const state = {
  loginEmail: '',
  userProfile: false,
  usersList: [],
  currentUser: null
};

const actions = {
  [LOGIN] ({ commit }, userData) {
    let userArray = [];
    for(let i in userData) {
      userArray.push(userData[i]);
    }
    commit('UPDATE_USERS_LIST', userArray)
  },
  [CURRENT_USER] ({ commit }, loggedUser) {
    commit('UPDATE_CURRENT_USER', loggedUser)
  }
};

const mutations = {
  [UPDATE_USERS_LIST] (state, allUserData) {
    state.usersList = allUserData;
  },
  [UPDATE_CURRENT_USER] (state, newUser) {
    state.currentUser = newUser;
  }
};

// const getters = {
//   getUserList: state => {
//     return state.usersList
//   },
//   getUsersLength: state => {
//     return state.usersList.length
//   }
// };

export default {
  state,
  actions,
  mutations
};