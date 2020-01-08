import { 
  LOGIN, 
  CURRENT_USER, 
  CLEAR_USER, 
  SHOW_PROFILE,
  HIDE_PROFILE 
} from '@/store/actions.type';
import { 
  UPDATE_USERS_LIST, 
  UPDATE_CURRENT_USER, 
  CLEAR_CURRENT_USER, 
  SHOW_USER_PROFILE ,
  HIDE_USER_PROFILE
} from '@/store/mutations.type';

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
      userData[i].userId = i;
      userArray.push(userData[i]);
    }
    commit('UPDATE_USERS_LIST', userArray)
  },
  [CURRENT_USER] ({ commit }, loggedUser) {
    commit('UPDATE_CURRENT_USER', loggedUser)
  },
  [CLEAR_USER] ({ commit }, clearCurrentUser) {
    commit('CLEAR_CURRENT_USER', clearCurrentUser)
  },
  [SHOW_PROFILE] ({ commit }, showProfile) {
    commit('SHOW_USER_PROFILE', showProfile)
  },
  [HIDE_PROFILE] ({ commit }, hideProfile) {
    commit('HIDE_USER_PROFILE', hideProfile)
  }
};

const mutations = {
  [UPDATE_USERS_LIST] (state, allUserData) {
    state.usersList = allUserData
  },
  [UPDATE_CURRENT_USER] (state, newUser) {
    state.currentUser = newUser
  },
  [CLEAR_CURRENT_USER] (state, currentUserValue) {
    state.currentUser = currentUserValue
  },
  [SHOW_USER_PROFILE] (state, showUserProfile) {
    state.userProfile = showUserProfile
  },
  [HIDE_USER_PROFILE] (state, hideUserProfile) {
    state.userProfile = hideUserProfile
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