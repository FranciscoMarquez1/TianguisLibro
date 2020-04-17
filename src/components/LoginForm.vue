<template>
    <div class="card col-5 center">
        <div>
            <b-form v-if="showLogin">
                <b-form-group id="input-login-1" label="Username:" label-for="input-login1">
                    <b-form-input id="input-login1" trim v-model="formLogin.username" type="text" required placeholder="Enter username"></b-form-input>
                </b-form-group>

                <b-form-group id="input-login-2" label="Password:" label-for="input-login2" v-bind:description="AuthError">
                    <b-form-input id="input-login2" v-model="formLogin.password" type="password" required placeholder="Enter password"></b-form-input>
                </b-form-group>

                <b-button variant="primary" v-on:click="login">Log In</b-button>
                <b-button variant="primary" v-on:click="showSignUp">Register</b-button>
            </b-form>
            <b-form v-if="showRegister">
                <b-form-group id="input-group-1" label="Username:" label-for="input-1" v-bind:description="RegisterError">
                    <b-form-input id="input-1" trim v-model="formRegister.username" type="text" required placeholder="Enter username"></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                    <b-form-input id="input-2" v-model="formRegister.password" type="password" required placeholder="Enter password"></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Phone number:" label-for="input-3" >
                    <b-form-input id="input-3" trim v-model="formRegister.phone" type="text" required placeholder="Enter phone number"></b-form-input>
                </b-form-group>

                <b-button variant="primary" v-on:click="register">Sign Up</b-button>
                <b-button variant="primary" v-on:click="showLog">Go back</b-button>
            </b-form>
        </div>
    </div>
    
</template>

<script>
    const axios = require("axios");
    const sha256 = require('js-sha256').sha256;

    export default {
        name: 'LoginForm',
        data() {
            return {
                formRegister: {
                    username: '',
                    password: '',
                    phone: '',
                },
                formLogin: {
                    username: '',
                    password: '',
                },
                showLogin: true,
                showRegister: false,
                user: {
                    username: '',
                    phone: ''
                },
                AuthError: "",
                RegisterError: ""
            }
        },
        methods: {
            register() {
                const hash = sha256(this.formRegister.password);
               axios
                  .post('https://cors-anywhere.herokuapp.com/https://wqxmyczq0l.execute-api.us-east-1.amazonaws.com/test/users?Username='+this.formRegister.username+"&Hash="+hash+"&Tel="+this.formRegister.phone)
                    .then(response => {
                        this.showRegister = false;
                        this.showLogin = true;
                        this.cleanFieldsRegister();
                    }, response => this.RegisterError = "Sorry ... username already taken!");
            },
            login() {
                const hash = sha256(this.formLogin.password);
                axios
                    .get('https://cors-anywhere.herokuapp.com/https://wqxmyczq0l.execute-api.us-east-1.amazonaws.com/test/users?Username='+this.formLogin.username+"&Hash="+hash)
                    .then(response => {
                        if (response.data == "Authentication failed. Wrong username or password"){
                            this.AuthError = response.data;
                        }else {
                            this.$emit('UserObtained', response.data[0])
                            this.AuthError = "";
                            this.$router.push("/");
                            this.cleanFieldsLogin();
                        }
                    });
            },
            showSignUp(){
                this.showLogin = false;
                this.showRegister = true;
            },
            showLog(){
                this.showLogin = true;
                this.showRegister = false;
            },
            cleanFieldsRegister(){
                this.formRegister.password = "";
                this.formRegister.phone = "";
                this.formRegister.username = "";
            },
            cleanFieldsLogin(){
                this.formLogin.password = "";
                this.formLogin.username = "";
            }
        }
    }
</script>

<style >
    .center{
        width: 300px;
        margin-right: auto;
        margin-left: auto;
        margin-top: 200px;
        padding-bottom: 20px;
    }
    .btn-primary {
        background-color: #f3881a;
        border-color: #f3881a;
    }
    .btn-primary:hover {
        background-color: #f9aa58;
        border-color: #f9aa58;
    }

</style>