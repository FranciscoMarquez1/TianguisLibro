<template>
    <div class="card">
        <div class="row">
            <div class="col-6">
                <p>Title: <span>Geometria Analitica</span></p>
                <p>Subject: <span>Matematics</span></p>
                <p>Price: <span>$800</span></p>
                <p>ISBN: <span>asdasdasd</span></p>
            </div>
            <div class="col-6">
                <p>Maximo Bautista</p>
                <img class="whatsapp" src="../assets/whatsapp-logo.png">

            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'BookCard',
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
}
.whatsapp {
    height: 64px;   
}
</style>