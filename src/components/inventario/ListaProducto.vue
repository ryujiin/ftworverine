<template lang="pug">
v-expansion-panel
  v-expansion-panel-content(v-for="(p, i) in productos" :key="i")
    template(v-slot:header)
      v-layout(align-center row spacer)
        v-flex()
          v-avatar(size="36px")
            img(:src="p.imagen")
        v-flex
          strong {{p.nombre}}
    v-card
      v-card-text
        v-layout {{p.descripcion}}
        v-layout
          v-btn(small color="cyan" dark) Editar
          v-btn(small color="red" dark) Eliminar
</template>

<script>
export default {
  data: () => ({
    productos: [
      {
        imagen: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
        nombre: 'Pantuflas Love',
        codigo: 'CD-001',
        descripcion: 'Pantuflas con estampado Love de dama',
        tipo: 'Producto Terminado',
        price: {
          value: 2000,
          formated: 'S/.20.00'
        }
      },
      {
        imagen: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
        nombre: 'Pantuflas Love',
        codigo: 'CD-001',
        descripcion: 'Pantuflas con estampado Love de dama',
        tipo: 'Producto Terminado',
        price: {
          value: 2000,
          formated: 'S/.20.00'
        }
      },
      {
        imagen: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
        nombre: 'Pantuflas Love',
        codigo: 'CD-001',
        descripcion: 'Pantuflas con estampado Love de dama',
        tipo: 'Producto Terminado',
        price: {
          value: 2000,
          formated: 'S/.20.00'
        }
      }
    ]
  })
}
</script>
