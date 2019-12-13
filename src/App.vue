<template>
  <div id="app">
    <!-- <HelloWorld msg="Ejercicios Vue"/> -->
    <!-- <juegos/> -->
    <tareas/>
    <randomuser/>
  </div>
</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'
// import juegos from './components/juegos'
// import tareas from './components/tareas'
import randomuser from './components/randomuser'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    // juegos,
    // tareas,
    randomuser

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  
}
</style>
