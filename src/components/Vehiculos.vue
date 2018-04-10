<template>
  <div>
      <h1>Vehiculos</h1>
      <h5>Data</h5>
      <pre>
          {{$data}}
      </pre>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Vehiculos',
mounted(){
 this.getVehicles()
},
data(){
return{
    vehicles:[]
}
},

methods: {
    getVehicles(){
        axios.get('https://swapi.co/api/vehicles/')
            .then((res)=>{
                console.log(res)
                this.vehicles= res.data.results

        })
            .catch((err)=>{
                console.log(err)
            })
    }

}
}

</script>
<style scoped>

</style>