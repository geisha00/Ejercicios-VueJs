<template>
  <div class="q-gutter-md row">
    <h1>{{ msg }}</h1>
     <p>
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>
     </p>

    <div class="section1">
      <li v-for="tarea in tareasPorAntiguedad" v-bind:key="tarea.id">
         {{tarea.nombre}}
       </li>
    </div>
    
    <form v-on:submit.prevent="agregarTarea">
        
        <input type="text" placeholder="introduce tu tarea" v-model="nuevaTarea"/>
        <input type="button" value="enviar otras tareas" />
        <!-- <button @click="eliminarObjetosRepetidos">eliminar colores repetidos</button> -->
     
    </form>
    <div id="example-1">
    <button v-on:click="counter += 1">Add 1</button>
     <p>Se ha hecho clic en el botón de arriba {{ counter }} veces.</p>
     </div>
     <br><br><br><br>
    {{$data}}
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },

  data: () => ({
    counter:0,
    nuevaTarea: "",
    tareas: [
       { nombre: "hacer la compra",
        prioridad: "alta",
        antiguedad:1000
        },
       { nombre: "hacer los deberes",
        prioridad: "baja",
         antiguedad:600
         },
       { nombre: "hacer la maqueta",
        prioridad: "alta",
         antiguedad:300 
         },
     ],
    
  }),
  methods: {
    agregarTarea() {
      this.otrasTareas.unshift({
      nombre:this.nuevaTarea,
      prioridad:false,
      antiguedad:0,
      });
      this.nuevaTarea = "";
    },

    //  eliminarObjetosRepetidos(){ 
    //  this.colores.filter((item,index)=>this.colores.indexOf(item)===index);
    //  }
  },
  computed:{
  tareasConPrioridad(){
    return this.tareas.filter((tarea)=>
      tarea.prioridad);
      },

    tareasPorAntiguedad(){
     return this.tareas.slice().sort((a,b)=>b.antiguedad - a.antiguedad);
       }

  },
};
</script>

<style scoped>
.section2{
  padding: 20px;

   }

</style>
