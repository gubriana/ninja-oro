<template>
  <div class="card">
    <div class="card-image">
      <button @click="generarPuntaje" class="btn-floating halfway-fab yellow darken-1 btn tooltipped" data-position="top" data-tooltip="Click para buscar oro "><i class="material-icons">{{icono}}</i></button>
    </div>
    <div class="card-content">
      <h4>{{titulo}}</h4>
      <p>Ganar entre {{min}} y {{max}}</p>
    </div>
  </div>
</template>
<script>
import M from 'materialize-css'

export default {
  name: 'Oro',
  props: {
    titulo: String,
    min: Number,
    max: Number,
    icono: String
  },
  methods: {
    generarPuntaje() {
      //generar número al azar entre min y max
      const puntajeOro = Math.round(Math.random() * (this.max - this.min) + this.min);
      console.log(puntajeOro);
      
      //esta es mi versión de mutuaciones y oro, se supone que esto debe ir al main store
      this.$store.commit("guardarOro", puntajeOro);

      // definir fecha y hora
      let dateObj = new Date();
      let hour = dateObj.getHours();
      let minutes = dateObj.getMinutes();
      let month = dateObj.getMonth() + 1; //months from 1-12
      let day = dateObj.getDate();
      let year = dateObj.getFullYear();
      const momento = hour + ":" + minutes + " - " + day + "." + month + "." + year;

      // agregar nueva actividad
      this.$store.commit('agregarActividad', {
        texto: `${puntajeOro < 0 ? "Perdiste" : "Ganaste"} ${puntajeOro} desde ${this.titulo} a las ${momento}`,
        puntaje: puntajeOro
      });
    }
  },

  
  mounted: function() {
      var elems = document.querySelectorAll('.tooltipped');
      M.Tooltip.init(elems, {});
  }
  /*
  <ul class="list-group list-group-flush">
  <li class="list-group-item" v-for="(activity, i) in activities" v-bind:key="i">{{ activity }}
  <span class="close" @click="$delete(activities, i)">x</span></li>
  </ul>
  PONER IMAGEN
  img :src="require('@/assets/img/' + pic + '.jpg')"
  img: String
  EN EL PADRE INTEGRAR
  */
}   
</script>
<style scoped>
</style>