<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/peliculas">Peliculas</router-link>
    <router-link to="/vehiculos">Vehiculos</router-link>
    <router-link to="/personajes">Personajes</router-link>
    <router-link to="/planetas">Planetas</router-link>
    <router-link to="/cruceros">Cruceros</router-link>

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
