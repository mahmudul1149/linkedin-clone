import "firebase/auth";
import firebase from "firebase/compat/app";
import item from "./data/user";
export const state = () => ({
  items: [],
  user: null,
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
  SET_USER(state, user) {
    state.user = user;
  },
  RESET_USER(state) {
    state.user = null;
    state.isLoggedIn = false;
  },
};
export const actions = {
  async signup({ commit }, { email, password, userName }) {
    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password, userName);

      await user.updateProfile({
        displayName: userName,
      });

      commit("SET_USER", user);
    } catch (error) {
      commit("RESET_USER");
      console.error(error);
      throw error;
    }
  },

  async login({ commit }, { email, password }) {
    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      commit("SET_USER", user);
    } catch (error) {
      commit("RESET_USER");
      console.error(error);
      throw error;
    }
  },
  async logout({ commit }) {
    try {
      await firebase.auth().signOut();
      commit("SET_USER", null);
    } catch (error) {
      alert(error);
    }
  },
  initItem({ commit }) {
    commit("SET_ITEMS", item);
  },
};
