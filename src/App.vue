<template>
  <div id="app">

    <NavBar></NavBar>
      <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: 'app',
   components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.row {
  margin-left: 0px;
  margin-right: 0px;
}
.custom-select {
  margin-top: 20px;
  width: 30%;
}
</style>
