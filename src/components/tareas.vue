<template>
  <div>
      <h2> Lista de tareas </h2>
      <h2> he completado :{{tareasCompletadas.length}}</h2>
      <li 
      :class= "{completado:tarea.completado}"
      @click="completarTarea(tarea)"
      v-for= "tarea in tareas" 
      v-bind:key="tarea.id">
          {{tarea.titulo}}
          </li>
     <br><br><br><br>
    {{$data}}
    </div>
</template>

<script>
export default {
  name: "tareas",
  data: () => ({
  
    tareas: [
       { titulo: "hacer la compra", completado: false
        },
        { titulo: "hacer los deberes",completado: false
         },
        { titulo: "hacer la maqueta", completado: true
          },
           { titulo: "salir a correr", completado: true
          },
           { titulo: "aprender Vue js", completado: false
         },
     ],
    
  }),
  methods: {

       completarTarea(tarea){
          tarea.completado=!tarea.completado
       },

  },
  computed:{
    tareasCompletadas(){
      return this.tareas.filter((tarea)=> tarea.completado)
    }

  },
};
</script>

<style scoped>
.li{
   cursor:help;
   }
   .completado{
     text-decoration: line-through;
    
   }

</style>
