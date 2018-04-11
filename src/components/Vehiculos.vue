<template>
<div class="row">
    <div class="col-md-12">
        <h1 >Vehicles {{vehicle.count}}</h1>
    </div>
    <div class="col-md-3" v-for="vehicle in vehicles" :key="vehicle.name" style="margin-bottom: 10px;">
        <div class="card">
                      <div class="card-body">
                <h5 class="card-title">{{vehicle.name}}</h5>
                <div>
                    <p>{{vehicle.manufacturer }}</p>
                    <p><strong>Films</strong></p>
                    <p>{{vehicle.films }}</p>

                </div>

            </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Vehiculos',
mounted(){
 this.getVehicles(),
 this.getFilms()
},
data(){
return{
    vehicles:[],
    films: []
}
},

methods: {
    getVehicles(){
        axios.get('https://swapi.co/api/vehicles/')
            .then((res)=>{
                console.log(res)
                this.vehicles= res.data.results

        })
            .catch((err)=>{
                console.log(err)
            })
    },
    getFilms() {
      axios
        .get("https://swapi.co/api/films/")
        .then(res => {
          console.log(res);
          this.films = res.data.results.title;
        })
        .catch(err => {
          console.log(err);
        });
    }

}
}

</script>
<style scoped>

</style>