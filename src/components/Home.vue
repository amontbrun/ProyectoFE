<template>
<div class="row">
    <div class="col-md-12">
        <h1>Films</h1>
    </div>
    <div class="col-md-6" v-for="film in films" :key="films.count" style="margin-bottom: 10px;">
        <div class="card">
           <img class="card-img-top img-responsive" src="../assets/images/frontepisode1.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{film.title}}</h5>
                <div>
                    <p>{{film.opening_crawl}}</p>
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


