<template>
    <div class="header">
        <div class="header-main">
            <router-link to="/">
                <img class="libro" src="https://tianguis-libro.s3.us-east-2.amazonaws.com/libro-logo.png"/>
                <h1 class="title">Tianguis del Libro</h1>
            </router-link>
        </div>
        <div class="links">
            <router-link to="/profile" class="user">
                <img class="logo" src="https://tianguis-libro.s3.us-east-2.amazonaws.com/profile-icon.png"/>
            </router-link>
            <router-link to="/login" class="login">
                <span>Login</span>
            </router-link>
        </div>
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
.header-main {
    width: 75%;
    display: inline-block;
}
.links {
    display: inline-block;
}
.logo {
    height: 34px;
}
.libro {
    height: 44px;
}
.title {
    display: inline-block;
    vertical-align: middle;
    padding-left: 10px;
    color: black;
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