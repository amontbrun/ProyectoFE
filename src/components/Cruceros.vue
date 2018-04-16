<template>
<div class="BG">
<div class="row">
    <div class="col-md-12">
        <h1>starships</h1>
             <!-- <img class="card-img-top img-responsive" src="../assets/images/starships-bg.jpg" alt="Card image cap"> -->
    </div>
    <div class="col-md-3" v-for="starship in starships" :key="starship.name" style="margin-bottom: 10px;">
        <div class="card">
     
            <div class="card-body">
                <h5 class="card-title">{{starship.name}}</h5>
                <div>
                    <p>{{starship.model}}</p>
                    <p><strong> Modelo: </strong>{{starship.model}}</p>
                    <p><strong> Fabricante: </strong>{{starship.manufacturer}}</p>
                    <p><strong> Tripulacion: </strong>{{starship.crew}}</p>
                    <p><strong> Pasajeros: </strong>{{starship.passengers}}</p>
                    <p><strong> Clase: </strong>{{starship.starship_class}}</p>


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
export default {
  name: 'cruceros',
mounted(){
 this.getStarships()
},
data(){
return{
    starships:[]
}
},

methods: {
    getStarships(){
        axios.get('https://swapi.co/api/starships/')
            .then((res)=>{
                console.log(res)
                this.starships= res.data.results

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
    background-image: url("../assets/images/starships-bg.jpg");
    background-repeat: no-repeat;
    background-size: auto;
}
.card{
    background-color: rgb(212, 222, 238);
    padding: 10px;
    opacity: 0.7;
    filter: alpha(opacity=30); /* For IE8 and earlier */
}
</style>