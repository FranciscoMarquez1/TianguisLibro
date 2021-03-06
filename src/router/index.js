import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import LoginForm from "../components/LoginForm";
import Profile from "../components/Profile";


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home
    },
    {
        path: '/login',
        name: "Login",
        component: LoginForm
    },
    {
        path: '/profile',
        name: "Profile",
        component: Profile
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
