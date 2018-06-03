import Vue from 'vue'
import Vuex from 'vuex'
import params from './module/params'
import user from './module/user'

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    modules: {
        params,
        user
    },
    plugins: []
})

export default store
