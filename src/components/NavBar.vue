<template>
    <div class="header">

        <router-link to="/">
            <img class="logo" src="../assets/libro-logo.png"/>
            <h1 class="title">Tianguis del Libro</h1>
        </router-link>
            <router-link to="/profile" class="user">
                <img class="logo" src="../assets/account.svg"/>
            </router-link>
            <router-link to="/login" class="login">
                <span>Login</span>
            </router-link>
    </div>

</template>

<script>
export default {
    name: 'NavBar',
    data: function(){
        return {
            iconPath: '/login', 
        }
    },
    props: {
        isLoggedIn: Boolean,
    },
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
.user:hover {
    opacity: 0.5;
}
.login {
    margin-left: 20px;
    font-size: 22px;
    color: #414241;
}
.login:hover {
    color: #8f908f;
}
</style>