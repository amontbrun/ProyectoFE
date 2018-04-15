<template>
<div class="row">
    <p>     {{persona.name}}</p>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Personaje',
  props: ['url'],
mounted(){
 this.getPersona()
},
data(){
    return{
        persona:{}
    }
},
methods: {
    getPersona(){
        axios.get(this.url)
            .then((res)=>{
                this.persona= res.data
                console.log(res.data.name)
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