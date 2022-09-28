import Vue from "vue";
import Vuex from "vuex"

// Modules
import users from "@/store/users/users";
import dictionary from "@/store/dictionary";


Vue.use(Vuex)

export default new Vuex.Store({
    modules: { users, dictionary }
})
