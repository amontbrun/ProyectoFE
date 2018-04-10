<template>
  <div>
      <h1>Home</h1>
      <h5>Data</h5>
      <pre>
          {{$data}}
      </pre>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Home',
mounted(){
 this.getFilms()
},
data(){
return{
    films:[]
}
},

methods: {
    getFilms(){
        axios.get('https://swapi.co/api/films/')
            .then((res)=>{
                console.log(res)
                this.films= res.data.results

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


