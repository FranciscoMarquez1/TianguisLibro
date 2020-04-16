<template>
    <div class="header">

        <router-link to="/">
            <img class="logo" src="../assets/libro-logo.png"/>
            <h1 class="title">Tianguis del Libro</h1>
        </router-link>
        <router-link to="/login" class="user">
            <img class="logo" src="../assets/account.svg"/>
        </router-link>
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
    color: black;
}
.user {
    margin-left: 90px;
}
</style>