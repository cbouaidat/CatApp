import Vue from "vue";
import Vuex from "vuex";
import breed from '@/store/modules/breed'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        breed,
    },
});