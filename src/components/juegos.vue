<template>
<div>
    <h2> Libreria de juegos </h2>
    <p>que juego necesitas?  <input type="search" v-model="busqueda" placeholder="busqueda de juego"></p>
    <ol>
        <!-- <li v-for= "juego in mejoresJuegos" v-bind:key="juego.id">  -->
             <li v-for= "juego in buscarJuego" v-bind:key="juego.id"> 
          {{juego.titulo}}
        </li>
    </ol>
     <input type="range" min="1" max="12" v-model="minimo">
     <br> <br> <br>
<pre>{{$data}}</pre>
</div>
</template>

<script>
export default {
  name: "juegos",
  
  data: () => ({
     minimo:2,
     busqueda:"",
    juegos: [{ 
        titulo: "batefielda",
        genero: "Fps",
        puntuacion:10
        },
       {
        titulo: "garfield",
        genero: "accion",
        puntuacion:8
         },
       { 
       titulo: "tetris",
        genero: "estrategia",
        puntuacion:2
         },
     ],
    
  }),
  methods: {

  },
  computed:{
    mejoresJuegos(){
      return this.juegos.filter((x)=>x.puntuacion >=this.minimo);
   },
   buscarJuego(){
  return this.juegos.filter((juego)=>juego.titulo.includes(this.busqueda));

   },

 
  },
};
</script>

<style scoped>


</style>
