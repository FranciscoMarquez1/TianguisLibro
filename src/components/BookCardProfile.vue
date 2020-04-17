<template>
    <div class="card">
        <div class="row">
            <div class="col-6">
                <p>Titulo: {{info.Title}}</p>
                <p>Área: {{info.Subject}}</p>
                <p>Precio: ${{info.price}}</p>
                <p>ISBN: {{info.ISBN}}</p>
            </div>
            <div class="col-6">
                <p>{{info.Username}}</p>
                <a v-bind:href="'https://wa.me/' + info.phone">
                <img class="whatsapp" src="https://tianguis-libro.s3.us-east-2.amazonaws.com/whatsapp-logo.png">
                </a>
                <p style="padding-top: 10px">Phone: {{info.phone}}</p>
                <b-icon-trash-fill v-on:click="deleteCard"></b-icon-trash-fill>


            </div>
        </div>
    </div>

</template>

<script>
const axios = require("axios");


export default {
    name: 'BookCard',
    props: {
        info: Object
    },
    methods: {
        //https://wqxmyczq0l.execute-api.us-east-1.amazonaws.com/test/tianguis?ID=5
        deleteCard: function(){
            axios
                .delete('https://cors-anywhere.herokuapp.com/https://wqxmyczq0l.execute-api.us-east-1.amazonaws.com/test/tianguis?ID='+this.info.ID)
                .then(this.updateScene);
        },
        updateScene: function(){
            this.$emit('targetDeleted');
        },
    }
}
</script>

<style>
.card{
    background-color: #fcf7bb;
    width: 70%;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 40px;
    padding-top: 10px;
    border-radius: 20px;
}
.whatsapp {
    height: 44px;   
}
.trash {
    font-size: 24px;
}
</style>