import Vuex from "vuex";
import Vue from "vue";
import users from "./module/users";

//loadinf vuex

Vue.use(Vuex);

//creating store

export default new  Vuex.Store({
    modules:{
        users
    }
})