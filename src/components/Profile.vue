<template>
    <div :key="componentKey">
        <h1 class="not-available" v-if="userCards.length == 0">Al parecer no hay libros disponibles</h1>
        <BookCardProfile v-for="card in userCards" :info="card" v-on:targetDeleted="reloadComponent">
        </BookCardProfile>  
    </div>
</template>


<script>
    const axios = require("axios");
    import BookCardProfile from "./BookCardProfile";


    export default {
        name: 'Profile',
        components: {
            BookCardProfile,
        },
        data: function () {
            return {
                cards: [],
                userCards: [],
                componentKey: 0,
            }
        },
        props: {
            Username: String,
        },
        mounted() {
            this.getCatalogo()
        },
        methods: {
            getCatalogo: function(){
            axios
                .get('https://wqxmyczq0l.execute-api.us-east-1.amazonaws.com/test/tianguis')
                .then(response => (this.cards=response.data))
                .then(this.opt);
                this.componentKey +=1;
            },
            opt: function(){
                this.userCards = [];
                for (var i = 0; i < this.cards.length; i++){
                    if(this.Username == this.cards[i].Username)
                        this.userCards.push(this.cards[i]);
                }
            },
            reloadComponent: function(){
                this.getCatalogo();
            },
        },
    }
</script>


<style>
.not-available {
    margin-top: 50px;
}
</style>