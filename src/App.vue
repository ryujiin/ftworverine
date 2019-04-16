<template lang="pug">
v-app
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

<style lang="stylus">

.content-bg{
  width: 100%;
  height: 185px;
  background: linear-gradient(45deg, #303f9f, #7b1fa2) !important;
  position: absolute;
}
</style>
