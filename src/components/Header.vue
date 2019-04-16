<template lang="pug">
header
  v-toolbar(color="indigo darken-2" dark app)
    v-toolbar-side-icon(@click.stop="menu = !menu" color="pink accent-2")
    v-toolbar-title wolverine
    v-spacer
    v-toolbar-items
      v-btn(flat @click="salir") Salir
  v-navigation-drawer(v-model="menu" absolute temporary app)
    SideMenu
</template>

<script>
import SideMenu from '@/components/SideMenu'
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      menu: null
    }
  },
  components: {
    SideMenu
  },
  methods: {
    ...mapMutations(['setToken']),
    salir () {
      localStorage.removeItem('token')
      this.setToken('')
    }
  }
}
</script>
