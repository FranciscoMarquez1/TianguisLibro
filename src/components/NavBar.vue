<template>
    <div class="header">

        <img class="logo" src="../assets/libro-logo.png"/>
        <router-link class="title" to="/">Tianguis del Libro</router-link>
        <router-link to="/login">Login</router-link>
    </div>

</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style>
.header {
    background-color: #f6d186;
    height: 70px;
    padding-top:10px;
}
.logo {
    height: 34px;
}
.title {
    display: inline-block;
    vertical-align: middle;
    padding-left: 10px;
}
</style>