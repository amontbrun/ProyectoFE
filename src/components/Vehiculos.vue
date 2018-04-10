<template>
<div class="row">
    <div class="col-md-12">
        <h1 >Vehicles({{count}})</h1>
    </div>
    <div class="col-md-2" v-for="vehicle in vehicles" :key="vehicles.count" style="margin-bottom: 10px;">
        <div class="card">
          <img class="card-img-top img-responsive" src="../assets/images/frontepisode1.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{vehicle.name}}</h5>
                <div>
                    <p>{{vehicle.manufacturer }}</p>

                </div>
                <a href="#" class="btn btn-primary">Go somewhere</a>
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
 this.getVehicles()
},
data(){
return{
    vehicles:[]
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
    }

}
}

</script>
<style scoped>

</style>