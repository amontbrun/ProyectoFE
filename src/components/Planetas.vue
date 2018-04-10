<template>
  <div>
      <h1>Planets</h1>
      <h5>Data</h5>
      <pre>
          {{$data}}
      </pre>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Planets',
mounted(){
 this.getPlanets()
},
data(){
return{
    planets:[]
}
},

methods: {
    getPlanets(){
        axios.get('https://swapi.co/api/planets/')
            .then((res)=>{
                console.log(res)
                this.planets= res.data.results

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


