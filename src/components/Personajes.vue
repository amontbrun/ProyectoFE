<template>
<div class="row">
    <div class="col-md-12">
        <h1>Personajes</h1>
    </div>
    <div class="col-md-3" v-for="person in people" :key="person.url" style="margin-bottom: 10px;">
        <div class="card">
           <img class="card-img-top img-responsive" :src="'images/people/'+person.name.split(' ').join('') + '.jpg'" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{person.name}}</h5>
                <div>
                    <p>Planeta: {{person.homeworld}}</p>
                    <p>Especie: {{person.species}}</p>
                    <p>Peliculas: <br> {{person.films}}</p>
                    <!-- <pelicula :url="url"
                                v-for="url in film.episode_id"
                                :key="url"></pelicula> -->
                </div>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</div>

</template>
<script>
import axios from 'axios'
import Pelicula from "../components/subcomponents/Pelicula.vue";
export default {
  name: 'Personajes',
  components: {
      pelicula: Pelicula
  },
mounted(){
 this.getPeople()
},
data(){
return{
    people:[]
}
},

methods: {
    getPeople(){
        axios.get('https://swapi.co/api/people/')
            .then((res)=>{
                console.log(res)
                this.people= res.data.results

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