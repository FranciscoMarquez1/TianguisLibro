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
                <img class="whatsapp" src="../assets/whatsapp-logo.png">
                </a>
                <p style="padding-top: 10px">Phone: {{info.phone}}</p>


            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'BookCard',
    props: {
        info: Object
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
</style>