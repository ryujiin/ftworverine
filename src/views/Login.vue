<template lang="pug">
.login
  v-container
    v-layout(align-center fill-height)
      v-flex(xs10 offset-xs1)
        v-form(@submit.prevent="login")
          v-text-field(prepend-inner-icon="perm_identity" label="Usuario" dark color="white" v-model="data.username")
          v-text-field(prepend-inner-icon="https" label="Contraseña" dark color="white"  v-model="data.password" type="password")
          v-btn(type="submit" block round color="teal darken-4" dark) Ingresar
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  data () {
    return {
      data: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['postLogin']),
    ...mapMutations(['setToken']),
    login () {
      this.postLogin(this.data).then(res => {
        console.log('login')
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.login{
  background-image: url('../assets/bg2login.jpg');
  background-size: 100% 100%;
  position: fixed;
  width: 100%;
  height: 100%;
  .container{
    height: 100%;
  }
}
</style>
