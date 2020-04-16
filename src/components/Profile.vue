<template>
    <div>
        <BookCardProfile v-for="card in userCards" :info="card">
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
                user: "legoshi",
            }
        },
        props: {
            Username: String,
        },
        created() {
            axios
                .get('https://wqxmyczq0l.execute-api.us-east-1.amazonaws.com/test/tianguis')
                .then(response => (this.cards=response.data))
                .then(this.opt);
        },
        methods: {
            opt: function(){
                for (var i = 0; i < this.cards.length; i++){
                    if(this.Username == this.cards[i].Username)
                        this.userCards.push(this.cards[i]);
                }
            }
        },
    }
</script>


<style>

</style>