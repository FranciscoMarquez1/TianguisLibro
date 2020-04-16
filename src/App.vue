<template>
  <div id="app">

    <NavBar></NavBar>
      <router-view v-on:UserObtained="setUser($event)" v-bind="myProps"></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: 'app',
  components: {
    NavBar
  },
  data(){
    return{
      currentUser:{
        username:"",
        phone:"",
        isLoggedIn: false
      }
    }
  },
  methods:{
    setUser(newUser){
      this.currentUser.username = newUser.Username;
      this.currentUser.phone = newUser.Phone;
      this.currentUser.isLoggedIn = true;

      console.log(this.currentUser.username);
      console.log(this.currentUser.phone);
      console.log(this.currentUser.isLoggedIn);
    }

  },
  computed: {
    myProps() {
      if (this.$route.name === 'Home') { return { Username: this.currentUser.username, isLogged: this.currentUser.isLoggedIn}}
    }
  },
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
