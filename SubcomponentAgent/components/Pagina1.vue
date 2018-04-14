<template>
  <div>
      <h1>Pagina 1</h1>
      <ul>
          <li v-for="film in films" :key="film.episode_id">{{ film.title }} <router-link :to="'/film/'+film.url.substr(27,27)">Details</router-link></li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  mounted(){
      this.getFilms()
  },
  data: function(){
      return {
          films: []
      }
  },
  methods: {
      getFilms(){
          axios.get('https://swapi.co/api/films')
            .then((res) => {
                this.films = res.data.results
            })
            .catch((err) => {
                console.log(err)
            })
      }
  }
}
</script>
