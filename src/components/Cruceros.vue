<template>
  <div>
      <h1>Cruceros</h1>
      <h5>Data</h5>
      <pre>
          {{$data}}
      </pre>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'cruceros',
mounted(){
 this.getStarships()
},
data(){
return{
    starships:[]
}
},

methods: {
    getStarships(){
        axios.get('https://swapi.co/api/starships/')
            .then((res)=>{
                console.log(res)
                this.starships= res.data.results

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