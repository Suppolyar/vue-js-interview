import Vue from "vue";
import Vuex from "vuex"
import user from "@/store/users/user";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: { user }
})
