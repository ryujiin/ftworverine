import Serivices from '@/services/wolverine'

const state = {
  token: ''
}

const getters = {
  getToken: state => state.token
}

const mutations = {
  setToken (state, data) {
    state.token = data
  }
}

const actions = {
  postLogin (context, data) {
    const promise = new Promise(function (resolve, reject) {
      Serivices.getLogin(data)
        .then(res => {
          const token = 'JWT ' + res.token
          localStorage.setItem('token', token)
          context.commit('setToken', token)
          resolve(res)
        })
    })
    return promise
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
