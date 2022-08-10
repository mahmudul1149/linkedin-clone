import item from './data/user'
export const state = () => ({
     items: []
  });

  export const getters = {
      items(state) {
        return state.items
      }
  }
  export const mutations = {
    SET_ITEMS(state, items) {
        state.items = items
    }
  }
  export const actions = {
      initItem({commit} ) {
        commit('SET_ITEMS', item)
      }
  }