import Vue from "vue";
import VueRouter from "vue-router";
//import store from '@/store'

Vue.use(VueRouter);

const routes = [{
        path: '/breed',
        name: 'CatBreed',
        component: () =>
            import ("../views/CatBreed.vue"),
}]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes,
});
export default router;