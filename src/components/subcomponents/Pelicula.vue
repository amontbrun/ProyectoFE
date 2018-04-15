<template>
  <div class="row">
      <p>{{ film.title }}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Pelicula',
    props: ['url'],
  mounted(){
      this.getFilmDetail()
  },
  data(){
      return {
          film: {}
      }
  },
  methods: {
      getFilmDetail(){
          axios.get(this.url)

            .then((res) => {
                this.film = res.data
            console.log(res.data.title)
            })
            .catch((err) => {
                console.log(err)
            })
      }
  }
}
</script>