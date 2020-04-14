<template>
  <div id="app">
    <NavBar/>
    <div class="row">
        <div class="col-8">
        <ul>
         <BookCard v-for="card in cards" :info="card">
         </BookCard>
        </ul>
        </div>
          <SideBar/>
    </div>      
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideBar.vue";
import BookCard from "./components/BookCard.vue";

const axios = require("axios");

export default {
  name: 'app',
   components: {
    NavBar,
    SideBar,
    BookCard,
  },
  data: function () {
    return {
      cards: null
    }
  },
  mounted() {
    axios
      .get('https://wqxmyczq0l.execute-api.us-east-1.amazonaws.com/test/tianguis')
      .then(response => (this.cards=response.data));
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
</style>
