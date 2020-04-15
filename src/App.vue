<template>
  <div id="app">
  <!--<button v-on:click="isLogged = !isLogged">Change isLogged</button>-->
    <NavBar/>
    <div class="row">
        <div class="col-8">
          <b-form-select v-model="selected" :options="options"></b-form-select>
        <ul>
         <BookCard v-for="card in activeCards" :info="card">
         </BookCard>
        </ul>
        </div>
          <SideBar :user="this.Username" :islogged="this.isLogged"/>
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
      cards: [],
      selected: null,
      options: [{ value: null, text: 'Filtrar Categorias' }],
      Username: 'ChebaCheba',
      isLogged: false,
    }
  },
  created() {
    axios
      .get('https://wqxmyczq0l.execute-api.us-east-1.amazonaws.com/test/tianguis')
      .then(response => (this.cards=response.data))
      .then(this.opt());
  },
  updated() {
    this.opt()
  },
  computed: {
    activeCards: function() {
      if (this.selected == null){
        return this.cards
      }
      else{
        let filtradas = [];
        for (var i = 0; i < this.cards.length; i++){
          if (this.cards[i].Subject == this.selected){
            filtradas.push(this.cards[i]);
          }
        }
        return filtradas;
      }
    }
  },
  methods: {
    opt: function(){
      for (var i = 0; i < this.cards.length; i++){
          if(!this.options.includes(this.cards[i].Subject))
              this.options.push(this.cards[i].Subject);
      }
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
