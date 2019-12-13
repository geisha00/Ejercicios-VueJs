<template>
  <div>
      <h2> Usuarios random </h2>
      <div>
      <img v-for="persona in personas"  :src="persona.picture.thumbnail" v-bind:key="persona.id"
      :alt="persona.name.first"> 
      </div>
     <br><br><br><br>
    {{$data}}
    </div>
</template>
 
<script>

 const axios = require('axios').default;
export default {
   name:'randomuser',

      mounted(){
       this.cargarPersonas('instancia montada');
        },

      data: () => ({
        
        personas:[]
            }),
    
      methods: {
      cargarPersonas(){
        //     var urlUsers = 'https://jsonplaceholder.typicode.com/users';
        // this.$http.get(urlUsers).then(function(response){
        //     this.lists = response.data;
        // });
    
        axios.get('https://randomuser.me/api/?results=100')
        .then((respuesta)=> {
          this.personas=respuesta.data.results;
        }); 

          },

        }
}
</script>



