<template>
<div class="row">
    <div class="col-md-12">
        <h1>starships</h1>
    </div>
    <div class="col-md-3" v-for="starship in starships" :key="starships.count" style="margin-bottom: 10px;">
        <div class="card">
             <img class="card-img-top img-responsive" src="../assets/images/frontepisode1.jpg" alt="Card image cap">
     
            <div class="card-body">
                <h5 class="card-title">{{starship.name}}</h5>
                <div>
                    <p>{{starship.model}}</p>

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

</style>