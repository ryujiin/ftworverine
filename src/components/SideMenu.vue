<template lang="pug">
v-list
  v-list-tile
    v-list-tile-action
      v-icon dashboard
    v-list-tile-title(@click="navegar('home')") Inicio
  v-list-group(:prepend-icon="link.icon" v-for="link in menu" :key="link.name")
    template(v-slot:activator)
      v-list-tile
        v-list-tile-title {{link.name}}
    v-list-tile( v-for="(inv, i) in link.children" :key="i" @click="navegar(inv.linkName)")
      v-list-tile-action
        v-icon(small) radio_button_unchecked
      v-list-tile-title {{inv.name}}
</template>

<script>
export default {
  data: () => ({
    menu: [
      {
        name: 'Inventario',
        children: [
          { name: 'Productos', linkName: 'InveProductos' },
          { name: 'Servicios', linkName: 'InveProductos' },
          { name: 'Insumos', linkName: 'InveProductos' },
          { name: 'Almacenes', linkName: 'InveProductos' }
        ],
        icon: 'apps'
      },
      {
        name: 'Contabilidad',
        children: [
          { name: 'Compras', linkName: 'InveProductos' },
          { name: 'Ventas', linkName: 'InveProductos' },
          { name: 'Balances', linkName: 'InveProductos' },
          { name: 'Finanzas', linkName: 'InveProductos' }
        ],
        icon: 'collections_bookmark'
      },
      {
        name: 'Recursos Humanos',
        children: [
          { name: 'Personal', linkName: 'InveProductos' },
          { name: 'Cargo', linkName: 'InveProductos' },
          { name: 'Permisos', linkName: 'InveProductos' }
        ],
        icon: 'people'
      }
    ]
  }),
  methods: {
    navegar (link) {
      this.$router.push({ name: link })
    }
  }
}
</script>
