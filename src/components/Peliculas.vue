<template>
<!-- template new -->




<!-- new template end -->
<div class="row">
    <div class="col-md-12">
        <h1>Films</h1>
    </div>
    <div class="col-md-3" v-for="film in films" :key="film.episode_id" style="margin-bottom: 10px;">
        <div class="card">
             <img class="card-img-top img-responsive" :src="'images/film-episode-'+film.episode_id + '.jpg'" alt="Card image cap">
                     <div class="card-body">
                <h5 class="card-title">{{film.title}}</h5>
                <div>
                    <p><strong>Sinopsis: </strong>  <br> {{film.opening_crawl}}</p>
                    <p><strong>Director: </strong> {{film.director}}</p>
                    <p><strong>Productor: </strong> {{film.producer}}</p>
                    <p><strong>Episodio #:: </strong> {{film.episode_id}}</p>
                    <p><strong>Fecha: </strong> {{film.release_date}}</p>
                     <p><strong>Personajes</strong></p>
                    <persona :url="url"
                              v-for="url in film.characters"
                              :key="url"></persona>  
                </div>
                <router-link :to="'/film/'+film.url.substr(27,27)">Mas detalle: {{ film.title }}</router-link>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from "axios";
import Persona from "../components/subcomponents/Persona.vue";
export default {
  name: "Peliculas",
  components: {
    persona: Persona
  },
  mounted() {
    this.getFilms();
  },
  data() {
    return {
      films: []
    };
  },

  methods: {
    getFilms() {
      axios
        .get("https://swapi.co/api/films/")
        .then(res => {
          console.log(res);
          this.films = res.data.results;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>

</style>