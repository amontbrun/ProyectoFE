<template>
<div class="row">
    <div class="col-md-12">
        <h1>people</h1>
    </div>
    <div class="col-md-3" v-for="person in people" :key="people.count" style="margin-bottom: 10px;">
        <div class="card">
           <img class="card-img-top img-responsive" src="../assets/images/frontepisode1.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{person.name}}</h5>
                <div>
                    <p>{{person.gender}}</p>
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
  name: 'Personajes',
mounted(){
 this.getPeople()
},
data(){
return{
    people:[]
}
},

methods: {
    getPeople(){
        axios.get('https://swapi.co/api/people/')
            .then((res)=>{
                console.log(res)
                this.people= res.data.results

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