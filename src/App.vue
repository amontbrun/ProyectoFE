

<template>  
<div id="app" >
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">StarWars</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active"><router-link to="/" class="nav-link">Home</router-link></li>
    <li class="nav-item"><router-link to="/peliculas" class="nav-link">Peliculas</router-link></li>
    <li class="nav-item"><router-link to="/vehiculos" class="nav-link">Vehiculos</router-link></li>
    <li class="nav-item"><router-link to="/personajes" class="nav-link">Personajes</router-link></li>
    <li class="nav-item"><router-link to="/planetas" class="nav-link">Planetas</router-link></li>
    <li class="nav-item"><router-link to="/cruceros" class="nav-link">Cruceros</router-link></li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>



    <ul>


    </ul>
    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>

</style>
