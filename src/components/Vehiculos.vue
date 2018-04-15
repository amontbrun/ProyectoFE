<template>
<div class="row">
    <div class="col-md-12">
        <h1>Vehicles</h1>
             <img class="card-img-top img-responsive" src="../assets/images/vehicles-bg.jpg" alt="Card image cap">
    </div>
    <div class="col-md-3" v-for="vehicle in vehicles" :key="vehicle.name" style="margin-bottom: 10px;">
        <div class="card">
     
            <div class="card-body">
                <h5 class="card-title">{{vehicle.name}}</h5>
                <div>
                    <p><strong> Modelo: </strong>{{vehicle.model}}</p>
                    <p><strong> Longitud: </strong>{{vehicle.lenght}}</p>
                    <p><strong> Tripulacion: </strong>{{vehicle.crew}}</p>
                    <p><strong> Pasajeros: </strong>{{vehicle.passengers}}</p>
                    <p><strong> Clase: </strong>{{vehicle.vehicle_class}}</p>

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
  name: 'vehiculos',
mounted(){
 this.getStarships()
},
data(){
return{
    vehicles:[]
}
},

methods: {
    getStarships(){
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