import Vue from 'vue'
import Vuex from 'vuex'

import user from '@/StoreModules/userStore'
import app from '@/StoreModules/appStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user
  }
})
