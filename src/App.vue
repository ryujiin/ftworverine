<template lang="pug">
v-app
  v-content
    router-view
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters(['getToken'])
  },
  data () {
    return {
      //
    }
  },
  methods: {
    ...mapMutations(['setToken']),
    cambioToken () {
      if (this.getToken.length > 0) {
        this.$router.push({ name: 'home' })
      } else {
        this.$router.push('/login')
      }
    }
  },
  mounted () {
    if (localStorage.getItem('token')) {
      this.setToken(localStorage.getItem('token'))
    }
  },
  watch: {
    'getToken': 'cambioToken'
  }
}
</script>
