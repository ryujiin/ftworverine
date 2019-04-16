<template lang="pug">
.productos
  .content-bg()
  v-container
    v-dialog(v-model="nuevoProduct" fullscreen hide-overlay transition="dialog-bottom-transition")
      v-card
        v-toolbar(dark color="primary")
          v-btn(icon dark @click="nuevoProduct = false")
            v-icon close
          v-toolbar-title Nuevo Producto
          v-spacer
          v-toolbar-items
            v-btn( dark flat @click="nuevoProduct = false") Grabar
        v-card-text
          h1 Enrique
    v-card(color="transparent" elevation="0")
      .titulo
        .headline Productos
        v-breadcrumbs.pa-1(:items="breadcrumbs" divider=">" dark)
    v-card
      v-card-title
        v-layout(align-center justify-space-between row fill-height)
          .subheading Listado de Productos
          v-btn(small color="blue darken-1" dark @click="nuevoProduct = true")
            v-icon add
            span Nuevo
      v-card-text
        ListaProducto
</template>

<script>
import ListaProducto from '@/components/inventario/ListaProducto.vue'

export default {
  components: {
    ListaProducto
  },
  data () {
    return {
      nuevoProduct: false,
      breadcrumbs: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard'
        },
        {
          text: 'Inventario',
          disabled: false,
          href: 'breadcrumbs_link_1'
        },
        {
          text: 'Productos',
          disabled: true,
          href: 'breadcrumbs_link_2'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.titulo{
  color: rgba(255, 255, 255, .85);
  a{
    color: rgba(255, 255, 255, .85);
  }
}
</style>
