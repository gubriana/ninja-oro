<template>
  <div class="card">
    <div class="card-image">
      <button @click="generarPuntaje" class="btn-floating halfway-fab waves-effect waves-light #fdd835 yellow darken-1 pulse "><i class="material-icons">{{icono}}</i></button>
    </div>
    <div class="card-content">
      <h4>{{titulo}}</h4>
      <p>Ganar entre {{min}} y {{max}}</p>
    </div>
  </div>
</template>
<script>

import storeOro from '../storeOro.js';

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
      // Se guarda numero generado en el almacén
      storeOro.sumar_oro(puntajeOro);
      // definir fecha y hora
      let dateObj = new Date();
      let hour = dateObj.getHours();
      let minutes = dateObj.getMinutes();
      let month = dateObj.getMonth() + 1; //months from 1-12
      let day = dateObj.getDate();
      let year = dateObj.getFullYear();
      const momento = hour + ":" + minutes + " - " + day + "." + month + "." + year;
      // agregar nueva actividad
      storeOro.agregar_actividades(
        // si gana
        `${puntajeOro < 0 ? "Perdiste" : "Ganaste"} ${puntajeOro} desde ${this.titulo} a las ${momento}`
        // si pierde
      );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>