<template>
<div class="row">
    <div class="col-md-12">
        <h1>Planets</h1>
          <img class="card-img-top img-responsive" src="../assets/images/planets-bg.jpg" alt="Card image cap">
    </div>
    <div class="col-md-3" v-for="planet in planets" :key="planet.name" style="margin-bottom: 10px;">
        <div class="card">

            <div class="card-body">
                <h5 class="card-title">{{planet.name}}</h5>
                <div>
                    <p><strong> Diametro: </strong>{{planet.diameter}}</p>
                    <p><strong> Clima:  </strong>{{planet.climate}}</p>
                    <p><strong> Terreno: </strong>{{planet.terrain}}</p>
                    <p><strong> Superficie de agua:: </strong>{{planet.surface_water}}%</p>
                    <p><strong> Poblacion: </strong>{{planet.population}}</p>


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
  name: "Planets",
  mounted() {
    this.getPlanets();
  },
  data() {
    return {
      planets: []
    };
  },

  methods: {
    getPlanets() {
      axios
        .get("https://swapi.co/api/planets/")
        .then(res => {
          console.log(res);
          this.planets = res.data.results;
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


