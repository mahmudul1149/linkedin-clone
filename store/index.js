import item from "./data/user";
import firebase from "firebase/compat/app";
export const state = () => ({
  items: [],
  user: [],
});

export const getters = {
  items(state) {
    return state.items;
  },
  user(state) {
    return state.user;
  },
  isUserAuth(state) {
    return !state.user;
  },
};
export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items;
  },
  setUser(state, user) {
    state.user = user;
  },

  initializeStore(state) {
    if (localStorage.getItem("item")) {
      state.user = JSON.parse(localStorage.getItem("item"));
    } else {
      localStorage.setItem("item", JSON.stringify(state.user));
    }
  },
};
export const actions = {
  initItem({ commit }) {
    commit("SET_ITEMS", item);
  },
  authAction({ commit }) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        commit("setUser", user);
      } else {
        commit("setUser", null);
      }
    });
  },
  signOutAction({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit("setUser", null);
      })
      .catch((error) => {
        commit("setError", error.message);
      });
  },
};
