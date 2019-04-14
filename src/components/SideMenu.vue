<template lang="pug">
v-navigation-drawer(stateless v-model="getSideMenu" absolute dark temporary)
  v-list
    v-list-tile
      v-list-tile-action
        v-icon home
      v-list-tile-title Inicio
    v-list-group(prepend-icon="account_circle" value="true")
      template(v-slot:activator)
        v-list-tile
          v-list-tile-title Catalogo
      v-list-group(no-action sub-group value="true")
        template(v-slot:activator)
          v-list-tile
            v-list-tile-title Productos
        v-list-tile( v-for="(admin, i) in admins" :key="i" @click="")
          v-list-tile-title(v-text="admin[0]")
          v-list-tile-action
            v-icon(v-text="admin[1]")
      v-list-group(no-action sub-group value="true")
        template(v-slot:activator)
          v-list-tile
            v-list-tile-title Mercaderia
        v-list-tile( v-for="(crud, i) in cruds" :key="i" @click="")
          v-list-tile-title(v-text="crud[0]")
          v-list-tile-action
            v-icon(v-text="crud[1]")
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getSideMenu'])
  },
  data: () => ({
    admins: [
      ['Management', 'people_outline'],
      ['Settings', 'settings']
    ],
    cruds: [
      ['Create', 'add'],
      ['Read', 'insert_drive_file'],
      ['Update', 'update'],
      ['Delete', 'delete']
    ]
  })
}
</script>
