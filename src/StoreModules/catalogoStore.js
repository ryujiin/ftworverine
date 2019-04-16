const state = {
  : null
}

const getters = {
  getSideMenu: state => state.sideMenu
}

const mutations = {
  setSideMenu (state) {
    state.sideMenu = !state.sideMenu
  }
}

const actions = {
}

export default {
  state,
  getters,
  mutations,
  actions
}
