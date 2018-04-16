<template>
<div class="BG">
    <div class="row">
        <div class="col-md-12">

            <h1>Vehicles</h1>
                <!-- <img class="card-img-top img-responsive" src="../assets/images/vehicles-bg.jpg" alt="Card image cap"> -->
                <hr>
                <br>
                <div class="row">
                    <pagination 
                        :ruta="ruta" 
                        :count="vehicles.count" 
                        :next="vehicles.next" 
                        :previous="vehicles.previous" />
                </div>
        </div>
        <div class="col-md-2" 
                v-for="vehicle in vehicles.results" 
                :key="vehicle.name" 
                style="margin-bottom: 10px;">
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
                    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
import Pagination from "../components/subcomponents/Pagination.vue";
export default {
  name: "vehicles",
  name: "vehicle",
   components: {
      'pagination': Pagination
  },
mounted: function(){
 this.getResponse(this.ruta)
},
data: function(){
return{
        vehicles:[],
      ruta: "https://swapi.co/api/vehicles/",
      page: 1
}
},

methods: {
    getResponse: function(url){
        axios
            .get(url)
            .then(res=>{
                // console.log(res)
                this.vehicles= res.data;

        })
            .catch((err)=>{
                console.log(err)
            })
    }

}
}

</script>
<style scoped>
.BG {
    background-image: url("../assets/images/vehicles-bg.jpg");
    background-repeat: no-repeat;
    background-size: auto;
}
.card{
    background-color: rgb(124, 162, 219);
    padding: 10px;
    opacity: 0.7;
    filter: alpha(opacity=30); /* For IE8 and earlier */
}

</style>