<template lang="pug">
header
  v-toolbar(color="primary" dark app)
    v-toolbar-side-icon(@click.stop="setSideMenu")
    v-toolbar-title wolverine
    v-spacer
    v-toolbar-items
      v-btn(flat @click="salir") Salir
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['setSideMenu', 'setToken']),
    salir () {
      localStorage.removeItem('token')
      this.setToken('')
    }
  }
}
</script>
