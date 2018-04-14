<template>
  <div>
      <h1>Pagina 2</h1>
      <h3>{{ film.title }}</h3>
      <pre>
      {{ film }}
      </pre>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  props: ['id'],
  mounted(){
      this.getFilmDetail()
  },
  data: function(){
      return {
          film: {}
      }
  },
  methods: {
      getFilmDetail(){
          console.log(this.id)
          axios.get('http://swapi.co/api/films/'+this.id)
            .then((res) => {
                this.film = res.data
            })
            .catch((err) => {
                console.log(err)
            })
      }
  }
}
</script>
