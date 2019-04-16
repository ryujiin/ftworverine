<template lang="pug">
.page
  HeaderApp
  v-content
    router-view
</template>

<script>
import { mapMutations } from 'vuex'
import HeaderApp from '@/components/Header.vue'

export default {
  components: {
    HeaderApp
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
