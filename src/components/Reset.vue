<template>
  <button class="waves-effect waves-light btn-large btn-block grey light-text" @click="resetPuntaje">Resetear todo</button>
</template>
<script>

import storeOro from '../storeOro.js'
import M from 'materialize-css'

export default {
  name: 'Reset',
  methods: {
    resetPuntaje() {
      const respuesta = confirm('¿Estás seguro que quieres resetear todo y perder toooodo tu oro?');
      if (respuesta){
        storeOro.reset_actividades();
        storeOro.reset_oro_total();
      }
    }
  },




  mounted: function() {
      var elems = document.querySelectorAll('.tooltipped');
      M.Tooltip.init(elems, {});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>