<template>
<div class="row">
    <li>     {{persona.name}}</li>
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
                // console.log(res.data.name)
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