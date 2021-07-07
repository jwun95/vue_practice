import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home"
import About from "./views/About"

Vue.use(VueRouter); // Vue 내부에서 라우터를 사용

const router = new VueRouter({// eslint-disable-line no-unused-vars
    mode: "history",
    routes: [
        {path: "/", component: Home},
        {path: "/about", component: About},
    ]
});

export default router;