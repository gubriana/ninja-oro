<template>
  <div id="app">
  <div class="hello row">
    <div class="col s2">
    </div>
    <div class="col s8">
      <div class="card #fdd835 yellow darken-1">
        <div class="card-content white-text">
          <span class="card-title"><h1>NINJA ORO</h1></span>
        </div>
        <div class="card-action">
          <h3 class=" white-text">120 pts</h3>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col s3">
          <Oro titulo="GRANJA" min="10" max="20"/>
        </div>
        <div class="col s3">
          <Oro titulo="CUEVA" min="5" max="10"/>
        </div>
        <div class="col s3">
          <Oro titulo="CASA" min="2" max="5"/>
        </div>
        <div class="col s3">
          <Oro titulo="CASINO" min="-50" max="50"/>
        </div>

        <div class="col s12">
          <div class="card">
            <div class="card-content">
              <span class="card-title">Actividades</span>
            <div class="card-action">
              <p>asdfasdf</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Oro from './components/Oro.vue'

export default {
  name: 'App',
  components: {
    Oro
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
