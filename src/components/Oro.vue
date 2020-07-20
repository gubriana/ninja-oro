<template>
  <div class="card">
    <div class="card-image">
      <button @click="generarPuntaje" class="btn-floating halfway-fab waves-effect waves-light #fdd835 yellow darken-1 pulse "><i class="material-icons">add</i></button>
    </div>
    <div class="card-content">
      <h4>{{titulo}}</h4>
      <p>Ganar entre {{min}} y {{max}} </p>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Oro',
  props: {
    titulo: String,
    min: Number,
    max: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>