<template lang="pug">
.page
  ToolbarNav
  SideMenu
  router-view
</template>

<script>
import { mapMutations } from 'vuex'
import ToolbarNav from '@/components/ToolbarNav.vue'
import SideMenu from '@/components/SideMenu.vue'

export default {
  components: {
    ToolbarNav, SideMenu
  },
  data () {
    return {
      data: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapMutations(['setToken']),
    salir () {
      console.log('salirS')
      localStorage.removeItem('token')
      this.setToken('')
    }
  }
}
</script>
