<template>
<div class="BG">
<div class="row">
    <div class="col-md-12">
    <br>
    <div class="row">
            <pagination 
                :ruta="ruta" 
                :count="characters.count" 
                :next="characters.next" 
                :previous="characters.previous" />
    </div>
    </div>
    <div class="col-md-3" 
            v-for="character in characters.results" 
            :key="character.name" 
            style="margin-bottom: 10px;">

        <div class="card">
           <img class="card-img-top img-responsive " 
                :src="'images/people/'+character.name.split(' ').join('') + '.jpg'" 
                alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{character.name}}</h5>
                <div>
                    <p><strong>Planeta: </strong>{{character.homeworld}}</p>
                    <p><strong>Especie: </strong>{{character.species}}</p>
                    <p><strong>Peliculas: </strong><br> {{character.films}}</p>
                    <!-- <pelicula :url="url"
                                v-for="url in film.episode_id"
                                :key="url"></pelicula> -->
                </div>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
        </div>
    </div>
</div>    
</div>               
</template>
<script>
import axios from "axios";
//import Pelicula from "../components/subcomponents/Pelicula.vue";
import Pagination from "../components/subcomponents/Pagination.vue";
export default {
    name:       "People",
    components: {
    pagination: Pagination
  },
  mounted: function() {
    this.getResponse(this.ruta);
  },
  data: function() {
    return {
      characters: [],
      ruta: "https://swapi.co/api/people",
      page: 1
    };
  },
  methods: {
    getResponse: function(url) {
      //console.log(url)
      axios
        .get(url)
        .then(res => {
          this.characters = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
.BG {
    background-image: url("../assets/images/vehicles-bg.jpg");
    background-repeat: no-repeat;
    background-size: auto;
}
.card{
    background-color: rgb(212, 222, 238);
    padding: 10px;
    opacity: 0.7;
    filter: alpha(opacity=30); /* For IE8 and earlier */
}

</style>