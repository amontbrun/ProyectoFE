<template>
<div class="row">
    <div class="col-md-12">
        <h1>Films</h1>
    </div>
    <div class="col-md-12" v-for="film in films" :key="film.episode_id" style="margin-bottom: 10px;">
        <div class="card">
             <img class="card-img-top img-responsive" :src="'images/film-bg-ep-'+film.episode_id + '.jpg'" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{film.title}}</h5>
                <div>
                    <p><strong>Sinopsis: </strong>  <br> {{film.opening_crawl}}</p>
                    <p><strong>Director: </strong> {{film.director}}</p>
                    <p><strong>Productor: </strong> {{film.producer}}</p>
                    <p><strong>Episodio #:: </strong> {{film.episode_id}}</p>
                    <p><strong>Fecha: </strong> {{film.release_date}}</p>
                </div>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from "axios";
export default {
  name: "Peliculas",
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
          this.films = res.data.results;
          console.log(res);
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


