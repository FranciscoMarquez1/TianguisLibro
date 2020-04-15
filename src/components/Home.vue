<template>
    <div class="row">
        <div class="col-8">
            <b-form-select v-model="selected" :options="options"></b-form-select>
            <ul>
                <BookCard v-for="card in activeCards" :info="card">
                </BookCard>
            </ul>
        </div>
        <SideBar :user="this.Username" :isLogged="this.isLogged"/>
    </div>
</template>

<script>
    import SideBar from "./SideBar";
    import BookCard from "./BookCard";

    const axios = require("axios");

    export default {
        name: "Home",
        components: {
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

<style scoped>

</style>